'use client';

import styles from './page.module.css';
import { useState } from 'react';

function Signup() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function handleSignup(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  }

  return (
    <div className={styles.signup}>
      <div className={styles.labels}>
        <div className={styles.label}>Sign Up</div>
        <div className={styles.label}>Login</div>
      </div>
      <form className={styles.signupForm} onSubmit={() => handleSignup}>
        <input
          type="text"
          className={styles.field}
          value={name}
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          className={styles.field}
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          className={styles.field}
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="text"
          className={styles.field}
          value={passwordConfirm}
          placeholder="Confirm Password"
          onChange={e => setPasswordConfirm(e.target.value)}
        />
        <button className={styles.btn}>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
