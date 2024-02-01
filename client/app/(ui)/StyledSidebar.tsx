import styles from './StyledSidebar.module.css';
import Link from 'next/link';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { FiEdit } from 'react-icons/fi';
import { GoArchive } from 'react-icons/go';
import { IoHomeOutline, IoSettingsSharp } from 'react-icons/io5';

interface SideProps {
  showmenu: boolean;
}

function StyledSidebar({ showmenu }: SideProps) {
  return (
    <div>
      <ul className={`${styles.navList} ${showmenu && styles.showMenu}`}>
        <li>
          <Link className={styles.navLink} href="/">
            <IoHomeOutline />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/addNotes">
            <FiEdit />
            <span>Notes</span>
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/archivedNotes">
            <GoArchive />
            <span>Archive</span>
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/calender">
            <HiOutlineCalendarDays />
            <span>Calender</span>
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/settings">
            <IoSettingsSharp />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default StyledSidebar;
