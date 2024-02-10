'use client';

import styles from './StyledSidebar.module.css';
import Link from 'next/link';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { FiEdit } from 'react-icons/fi';
import { GoArchive } from 'react-icons/go';
import {
  IoHomeOutline,
  IoSettingsSharp,
  IoPersonOutline,
} from 'react-icons/io5';

import { useEffect, useState } from 'react';
import { useAuth } from '../(hooks)/AuthProvider';

interface SideProps {
  showmenu: boolean;
}

function StyledSidebar({ showmenu }: SideProps) {
  const auth: any = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    typeof window !== 'undefined' && localStorage.getItem('token')
      ? true
      : false
  );

  const [id, setId] = useState();
  useEffect(() => {
    function getUser() {
      if (authenticated) {
        auth.getProfile().then((user: any) => {
          setId(user._id);
        });
      }
    }
    getUser();
  }, [auth, authenticated]);

  return (
    <div>
      <ul className={`${styles.navList} ${showmenu && styles.showMenu}`}>
        <Link href="/" style={{ fontSize: '2.4rem' }}>
          Logo
        </Link>
        <Link className={styles.navLink} href="/">
          <IoHomeOutline />
          <span>Home</span>
        </Link>

        <Link className={styles.navLink} href="/addNotes">
          <FiEdit />
          <span>Notes</span>
        </Link>

        <Link className={styles.navLink} href="/archivedNotes">
          <GoArchive />
          <span>Archive</span>
        </Link>

        <Link className={styles.navLink} href="/calender">
          <HiOutlineCalendarDays />
          <span>Calender</span>
        </Link>

        <Link className={styles.navLink} href="/settings">
          <IoSettingsSharp />
          <span>Settings</span>
        </Link>
        <div
          className={`${styles.navLink} ${styles.account}`}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <IoPersonOutline />
          <span>Account</span>
        </div>
        {showMenu && (
          <div className={styles.menuOpt}>
            {authenticated ? (
              <div className={styles.profileOpt}>
                <Link href={`/user/${id}`} className={styles.optLink}>
                  My account
                </Link>
              </div>
            ) : (
              <div className={styles.unauth}>
                Notes will not be saved,{'  '}
                <Link href="/signup" className={styles.authLink}>
                  Sign up
                </Link>
              </div>
            )}
          </div>
        )}
      </ul>
    </div>
  );
}

export default StyledSidebar;
