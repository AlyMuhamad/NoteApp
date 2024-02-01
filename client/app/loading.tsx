'use client';

import styles from './loading.module.css';

export default function Loader() {
  return (
    <div>
      <div className={styles.spinner} />
    </div>
  );
}
