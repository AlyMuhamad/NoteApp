'use client';

import styles from './page.module.css';
import AppLayout from '../(ui)/AppLayout';

function Settings() {
  return (
    <AppLayout>
      <div className={styles.section}>
        <div className={styles.title}>Settings</div>
        <div>
          There are so many features coming in like dark mode etc.. so stay tune
        </div>
      </div>
    </AppLayout>
  );
}

export default Settings;
