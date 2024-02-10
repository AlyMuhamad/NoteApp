'use client';

import { useEffect, useState } from 'react';
import styles from './Toast.module.css';
import { useAuth } from '../(hooks)/AuthProvider';

function Toast() {
  const auth: any = useAuth();

  useEffect(() => {
    setTimeout(function () {
      auth.setError('');
    }, 3000);
  }, [auth]);

  return (
    <div>{auth.error && <div className={styles.msg}>{auth.error}</div>}</div>
  );
}

export default Toast;
