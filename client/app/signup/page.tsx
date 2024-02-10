'use client';

import Link from 'next/link';
import validator from 'validator';
import styles from './page.module.css';
import Header from '../(ui)/Header';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '../(hooks)/AuthProvider';
import Toast from '../(ui)/Toast';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);

  const pathName = usePathname();
  const auth: any = useAuth();

  async function handleSignup(e: any) {
    e.preventDefault();

    auth
      .authAction(
        {
          name,
          email,
          password,
          passwordConfirm,
        },
        'http://127.0.0.1:5000/users/signup'
      )
      .then((result: any) => {
        if (result) {
          setName('');
          setEmail('');
          setPassword('');
          setPasswordConfirm('');
          setTermsChecked(false);
        }
      });
  }

  return (
    <div className={styles.section}>
      <Header />
      {auth.error && <Toast />}
      <div className={styles.signup}>
        <div className={styles.labels}>
          <Link className={styles.label} href="/sign">
            Sign Up
          </Link>
          <Link
            className={`${styles.label} ${
              pathName === '/signup' && styles.greyedLabel
            }`}
            href="/login"
          >
            Login
          </Link>
        </div>
        <form className={styles.signupForm} onSubmit={handleSignup}>
          <input
            type="text"
            required
            className={styles.field}
            value={name}
            placeholder="Name"
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            required
            className={styles.field}
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            required
            className={styles.field}
            value={password}
            placeholder="Password of characters (8 - 16)"
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="text"
            required
            className={styles.field}
            value={passwordConfirm}
            placeholder="Confirm Password"
            onChange={e => setPasswordConfirm(e.target.value)}
          />
          <div className={styles.check}>
            <input
              type="checkbox"
              id="terms"
              checked={termsChecked}
              onChange={() => setTermsChecked(!termsChecked)}
              required
            />
            <label htmlFor="terms">By clicking, you agree to our terms</label>
          </div>
          <button
            className={styles.btn}
            disabled={
              !validator.isAlphanumeric(name) ||
              !validator.isEmail(email) ||
              !validator.isLength(password, { min: 8, max: 16 }) ||
              passwordConfirm !== password ||
              !termsChecked
            }
          >
            {auth.isLoading ? 'Loading' : 'Sign up'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
