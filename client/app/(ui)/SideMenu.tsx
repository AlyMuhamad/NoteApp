import Link from 'next/link';
import styles from './SideMenu.module.css';
import { IoPersonAddOutline, IoLogInOutline, IoClose } from 'react-icons/io5';
import { MdOutlineMore } from 'react-icons/md';

interface MenuProps {
  onProfileOpt: any;
  authenticated: any;
}

const style = {
  fontSize: '2.4rem',
  cursor: 'pointer',
};

const closeStyle = {
  fontSize: '4rem',
  cursor: 'pointer',
};

function SideMenu({ onProfileOpt, authenticated }: MenuProps) {
  return (
    <div className={styles.section}>
      <div className={styles.sideContent}>
        <IoClose
          className={styles.closeBtn}
          onClick={() => onProfileOpt(false)}
        />
        {!authenticated ? (
          <div className={styles.sideLinks}>
            <Link className={styles.menuLink} href="/signup">
              <IoPersonAddOutline style={style} />
              <div>Sign up</div>
            </Link>
            <Link className={styles.menuLink} href="/login">
              <IoLogInOutline style={style} />
              <div>Log in</div>
            </Link>
            <Link className={styles.menuLink} href="/">
              <MdOutlineMore style={style} />
              <div>About us</div>
            </Link>
          </div>
        ) : (
          <div className={styles.sideLinks}>
            <Link href="/user/myaccount" className={styles.menuLink}>
              My account
            </Link>
            <Link href="/addNotes" className={styles.menuLink}>
              Take notes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideMenu;
