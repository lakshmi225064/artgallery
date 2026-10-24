# RangKala — Indian Paintings Gallery

A responsive React and Vite frontend showcasing Indian paintings, artists, and art traditions. Built as a frontend-only MERN course assignment; user-created accounts are saved in the current browser using local storage.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Pages

- `/` — Gallery home
- `/gallery` — Searchable, filterable artwork display
- `/artwork/shakuntala` — Shakuntala
- `/artwork/bharat-mata` — Bharat Mata
- `/artwork/three-girls` — Three Girls
- `/artwork/bani-thani` — Bani Thani
- `/artwork/radha-krishna` — Radha and Krishna
- `/about` — Indian painting traditions
- `/login` and `/signup` — Frontend-only forms with input validation

The other collection cards also open their own artwork detail pages. Artwork metadata is in `src/data/artworks.js`; images are requested from Wikimedia Commons and a local inline fallback is shown if an image cannot load. Dates or attributions that are uncertain are identified as approximate or by tradition.

Sign up with your own name, email, and password, then use those details to log in in the same browser. No accounts are pre-created. Passwords are stored as salted PBKDF2 hashes; account data stays in this browser’s local storage and is not sent to a server. Clearing this site's browser data removes the saved accounts. This is for demonstration only—browser storage is not production authentication. Never use real or reused passwords.
