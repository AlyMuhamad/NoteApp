'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import SideMenu from './SideMenu';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoMenuOutline, IoPersonOutline } from 'react-icons/io5';

const style = {
  fontSize: '3rem',
  color: 'black',
  cursor: 'pointer',
};

function Header() {
  const pathName = usePathname();
  const [profileOpt, setProfileOpt] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    typeof window !== 'undefined' && localStorage.getItem('token')
      ? true
      : false
  );

  return (
    <div className={styles.header}>
      <Link
        href="/"
        className={`${styles.headerLink} ${
          pathName === '/' && styles.currentRoute
        }`}
      >
        Home
      </Link>
      <Link
        href="/blog"
        className={`${styles.headerLink} ${
          pathName === '/blog' && styles.currentRoute
        }`}
      >
        Blog
      </Link>
      <Link
        href="/contact"
        className={`${styles.headerLink} ${
          pathName === '/contact' && styles.currentRoute
        }`}
      >
        Contact
      </Link>
      <div className={styles.account}>
        <IoPersonOutline
          style={style}
          onClick={() => {
            setProfileOpt(!profileOpt);
          }}
        />
        {/* <IoMenuOutline style={style} /> */}
      </div>
      {profileOpt && (
        <SideMenu onProfileOpt={setProfileOpt} authenticated={authenticated} />
      )}
      {/* <div className={styles.profileOpt}>
        <Link href="/signup">Signup</Link>
        <Link href="/login">login</Link>
      </div> */}
    </div>
  );
}
export default Header;
