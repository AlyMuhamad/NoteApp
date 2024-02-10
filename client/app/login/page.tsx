'use client';

import Link from 'next/link';
import validator from 'validator';
import styles from './page.module.css';
import { useState } from 'react';
import Header from '../(ui)/Header';
import { usePathname } from 'next/navigation';
import Toast from '../(ui)/Toast';
import { useAuth } from '../(hooks)/AuthProvider';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [noPassword, setNoPassword] = useState(false);
  const pathName = usePathname();

  const auth: any = useAuth();

  async function handleLogin(e: any) {
    e.preventDefault();

    auth
      .authAction(
        { email, password },
        'http://127.0.0.1:5000/api/v1/users/login'
      )
      .then((result: any) => {
        if (result) {
          setEmail('');
          setPassword('');
        }
      });
  }

  return (
    <div className={styles.section}>
      <Header />
      {auth.error && <Toast />}
      <div className={styles.login}>
        <div className={styles.labels}>
          <Link
            className={`${styles.label} ${
              pathName === '/login' && styles.greyedLabel
            }`}
            href="/signup"
          >
            Sign Up
          </Link>
          <Link className={styles.label} href="/login">
            Login
          </Link>
        </div>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <input
            type="text"
            className={styles.field}
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
          {!noPassword && (
            <input
              type="text"
              className={styles.field}
              value={password}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
          )}

          <button
            className={styles.btn}
            disabled={
              !validator.isEmail(email) ||
              (!validator.isLength(password, { min: 8, max: 16 }) &&
                !noPassword)
            }
          >
            {auth.isLoading
              ? 'Loading'
              : noPassword
              ? 'Reset Password'
              : 'Log in'}
          </button>
        </form>
        <button
          className={styles.forgetBtn}
          onClick={() => setNoPassword(!noPassword)}
        >
          {noPassword ? 'I remembered my password!' : 'I forgot my password!'}
        </button>
      </div>
    </div>
  );
}

export default Login;
