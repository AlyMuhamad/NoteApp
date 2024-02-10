'use client';

import { FiEdit3 } from 'react-icons/fi';
import styles from './page.module.css';
import Header from '../../(ui)/Header';
import { useState } from 'react';
import { useAuth } from '../../(hooks)/AuthProvider';

const style = {
  fontSize: '1.8rem',
  color: 'black',
  cursor: 'pointer',
};

function User() {
  const auth: any = useAuth();
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('token') ? true : false
  );
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  if (authenticated) {
    auth.getProfile().then((user: any) => {
      setName(user.name);
      setEmail(user.email);
    });
  }

  return (
    <div className={styles.section}>
      <Header />
      <div className={styles.profile}>
        <div className={styles.sidebar}>
          <div>personal information</div>
          <div>settings</div>
          <button className={styles.logout} onClick={auth.logOut}>
            Logout
          </button>
        </div>
        <div className={styles.contentSide}>
          <div className={styles.greetings}>Hello, {name}</div>
          <form>
            <div className={styles.field}>
              <div className={styles.labelHead}>
                <label htmlFor="name" className={styles.label}>
                  Profile name
                </label>
                <FiEdit3 style={style} />
              </div>
              <input
                type="text"
                id="name"
                readOnly
                value={name}
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <div className={styles.labelHead}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <FiEdit3 style={style} />
              </div>
              <input
                type="text"
                id="email"
                readOnly
                value={email}
                className={styles.input}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
