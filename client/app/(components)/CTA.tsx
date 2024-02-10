import { Ref, RefObject } from 'react';
import styles from './CTA.module.css';
import Link from 'next/link';

interface CTAProps {
  scrollToPricing: RefObject<HTMLButtonElement>;
}

const CTA: React.FC<CTAProps> = ({ scrollToPricing }) => {
  const scroll = () => {
    scrollToPricing?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.headline}>
          Get started with Notes today{' '}
          <span style={{ borderBottom: '4px solid var(--color-brand-500)' }}>
            for free
          </span>
        </div>
        <div className={styles.description}>
          Our powerful features are designed to enhance your productivity and
          creativity.
        </div>
        <Link href="/signup" className={`${styles.btn} ${styles.signupBtn}`}>
          Sign up
        </Link>
        <div className={styles.explore}>
          <div className={styles.description}>
            Still contemplating? Explore our premium plans for more features and
            capabilities
          </div>
          <div>
            <button
              className={`${styles.btn} ${styles.exploreBtn}`}
              onClick={scroll}
            >
              Explore premium plans
            </button>
          </div>
        </div>
        <div className={styles.description}>
          Have questions or need assistance? Our support team is ready to help,{' '}
          <div className={styles.support}>Contact Suppport</div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
