const STORAGE_KEY = 'rangkala-demo-accounts-v1';
const HASH_ITERATIONS = 120000;
const LEGACY_HASH_ITERATIONS = 120000;

const previousBuiltInAccounts = [
  { name: 'RangKala Curator', email: 'curator@rangkala.demo' },
  { name: 'Gallery Visitor', email: 'visitor@rangkala.demo' },
];

function getAccounts() {
  const savedAccounts = localStorage.getItem(STORAGE_KEY);
  if (!savedAccounts) return [];

  const accounts = JSON.parse(savedAccounts);
  if (
    !Array.isArray(accounts) ||
    accounts.some(
      (account) =>
        typeof account.name !== 'string' ||
        typeof account.email !== 'string' ||
        typeof account.salt !== 'string' ||
        typeof account.passwordHash !== 'string' ||
        (account.iterations !== undefined && !Number.isInteger(account.iterations)),
    )
  ) {
    throw new Error('Saved demo accounts are invalid. Clear this site’s RangKala account data and try again.');
  }
  return accounts;
}

function saveAccounts(accounts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts));
}

async function createPasswordHash(password, salt, iterations = HASH_ITERATIONS) {
  if (!globalThis.crypto?.subtle) {
    throw new Error('Secure browser storage is unavailable. Open RangKala on localhost or HTTPS.');
  }
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
  const hash = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
    key,
    256,
  );
  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function bytesToHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function hexToBytes(hex) {
  if (!/^(?:[0-9a-f]{2})+$/i.test(hex)) {
    throw new Error('A saved account is invalid. Clear this site’s RangKala account data and try again.');
  }
  return new Uint8Array(hex.match(/.{2}/g).map((byte) => Number.parseInt(byte, 16)));
}

export function initializeAccountStorage() {
  const accounts = getAccounts();
  const userAccounts = accounts.filter(
    (account) =>
      !previousBuiltInAccounts.some(
        (builtInAccount) =>
          account.name === builtInAccount.name && account.email === builtInAccount.email,
      ),
  );
  if (userAccounts.length !== accounts.length || !localStorage.getItem(STORAGE_KEY)) {
    saveAccounts(userAccounts);
  }
}

export async function registerAccount({ name, email, password }) {
  const accounts = getAccounts();
  const normalizedEmail = email.toLowerCase();
  if (accounts.some((account) => account.email === normalizedEmail)) {
    throw new Error('An account with this email already exists. Try logging in instead.');
  }

  const salt = crypto.getRandomValues(new Uint8Array(16));
  const account = {
    name,
    email: normalizedEmail,
    salt: bytesToHex(salt),
    passwordHash: await createPasswordHash(password, salt),
    iterations: HASH_ITERATIONS,
  };
  saveAccounts([...accounts, account]);
}

export async function authenticateAccount(email, password) {
  const account = getAccounts().find((savedAccount) => savedAccount.email === email.toLowerCase());
  if (!account) return false;

  const iterations = account.iterations ?? LEGACY_HASH_ITERATIONS;
  const actualHash = await createPasswordHash(password, hexToBytes(account.salt), iterations);
  return actualHash === account.passwordHash;
}
