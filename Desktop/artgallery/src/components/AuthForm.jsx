import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authenticateAccount, initializeAccountStorage, registerAccount } from '../data/authStorage.js';

export default function AuthForm({ mode }) {
  const isSignup = mode === 'signup';
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [accountsReady, setAccountsReady] = useState(false);

  useEffect(() => {
    try {
      initializeAccountStorage();
      setAccountsReady(true);
    } catch (initializationError) {
      setError(initializationError.message || 'Could not load saved accounts. Check browser storage and try again.');
      setAccountsReady(true);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setMessage('');
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim().toLowerCase();
    const password = String(formData.get('password') || '');
    const confirmPassword = String(formData.get('confirmPassword') || '');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.');
      return;
    }
    if (password.length < 8) {
      setError('Your password must be at least 8 characters.');
      return;
    }
    if (isSignup && !name) {
      setError('Please enter your name.');
      return;
    }
    if (isSignup && password !== confirmPassword) {
      setError('Your passwords do not match.');
      return;
    }

    try {
      if (isSignup) {
        await registerAccount({ name, email, password });
        setMessage(`Your account for ${email} is saved in this browser. You can now log in.`);
        form.reset();
      } else if (await authenticateAccount(email, password)) {
        setMessage(`Welcome back, ${email}. You are logged in for this demo.`);
      } else {
        setError('Email or password is incorrect. Check your details or create an account.');
      }
    } catch (accountError) {
      setError(accountError.message || 'Could not save or verify your account. Check browser storage and try again.');
    }
  }

  return (
    <section className="auth-page">
      <div className="auth-art">
        <div className="auth-art-overlay">
          <span className="eyebrow">A living archive</span>
          <p>“Art is not what you see, but what you make others see.”</p>
          <small>Discover the stories behind every brushstroke.</small>
        </div>
      </div>
      <div className="auth-panel">
        <span className="eyebrow">{isSignup ? 'Your place in the gallery' : 'Welcome back'}</span>
        <h1>{isSignup ? 'Create your account' : 'Log in to RangKala'}</h1>
        <p className="auth-intro">{isSignup ? 'Create an account saved in this browser so you can log in for the demo.' : 'Log in with an account you created using Sign Up in this browser.'}</p>
        <form onSubmit={handleSubmit} noValidate>
          {isSignup && <label>Your name<input name="name" autoComplete="name" required /></label>}
          <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
          <label>Password<input name="password" type="password" minLength="8" autoComplete={isSignup ? 'new-password' : 'current-password'} required /></label>
          {isSignup && <label>Confirm password<input name="confirmPassword" type="password" minLength="8" autoComplete="new-password" required /></label>}
          {error && <p className="form-message error" role="alert">{error}</p>}
          {message && <p className="form-message success" role="status">{message}</p>}
          <button className="button auth-submit" type="submit" disabled={!accountsReady}>{isSignup ? 'Create account' : 'Log in'} <span aria-hidden="true">→</span></button>
        </form>
        <p className="auth-switch">
          {isSignup ? 'Already have an account?' : 'New to RangKala?'}{' '}
          <Link to={isSignup ? '/login' : '/signup'}>{isSignup ? 'Log in' : 'Sign up'}</Link>
        </p>
        <button className="text-button" type="button" onClick={() => navigate('/gallery')}>Continue as a guest</button>
      </div>
    </section>
  );
}
