'use client';

import styles from './Sidebar.module.css';
import { IoMenuOutline, IoClose } from 'react-icons/io5';
import { useState } from 'react';
import StyledSidebar from './StyledSidebar';

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className={styles.section}>
      <div style={{ fontSize: '2.4rem' }}>Logo</div>
      <nav>
        <div className={styles.menu}>
          <IoMenuOutline onClick={handleMenu} />
        </div>
        <StyledSidebar showmenu={false} />
      </nav>
      {showMenu && (
        <div className={styles.sideNav}>
          <button className={styles.closeBtn} onClick={handleMenu}>
            <IoClose />
          </button>
          <StyledSidebar showmenu={showMenu} />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
