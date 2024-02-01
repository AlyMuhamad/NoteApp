'use client';

import styles from './page.module.css';
import AppLayout from '../(ui)/AppLayout';
import Image from 'next/image';
import image from '../(assets)/(images)/6.png';

function Calender() {
  return (
    <AppLayout>
      <div className={styles.section}>
        <Image src={image} alt="a clock" width={400} height={300} priority />
        We are still working on this feature, it is coming soon so stay tuned
      </div>
    </AppLayout>
  );
}

export default Calender;
