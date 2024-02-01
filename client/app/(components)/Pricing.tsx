import styles from './Pricing.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const plansData = [
  {
    title: 'Free',
    price: 'free',
    description:
      'Enjoy the core features for free, ideal for individual users and casual note-takers',
    btn: 'create a free account',
    features: [
      'Basic Note-taking',
      'Organization',
      'Cross-Device Sync',
      'Limited Collaboration',
    ],
  },

  {
    title: 'Premium',
    price: '9.99 $/mon',
    description:
      'Upgrade to unlock advanced features for enhanced productivity and creativity',
    btn: 'start a free trial',
    features: [
      'Unlimited Storage',
      'Enhanced Organization',
      'Customization',
      'Collaboration Tools',
      'Offline Access',
    ],
  },

  {
    title: 'Enterprise',
    price: '49.99 $/mon',
    description:
      'Tailored for businesses and teams, this plan offers features for collaboration and productivity',
    btn: 'start a free trial',
    features: [
      'Admin Controls',
      'Advanced Collaboration',
      'Priority Support',
      'Analytics and Reporting',
      'Custom Branding',
    ],
  },
];

interface PricingProps {
  props: any;
  ref: HTMLButtonElement;
}

// export type Ref = ;

const Pricing = forwardRef((props, ref) => {
  const myRef = useRef<null | HTMLDivElement>(null);
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      myRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
  }));

  return (
    <div className={styles.table} ref={myRef}>
      {plansData.map(plan => (
        <div
          className={`${styles.card} ${
            plan.title === 'Premium' && styles.cardPremium
          }`}
          key={plan.title}
        >
          <div className={styles.title}>{plan.title}</div>
          <div>{plan.description}</div>
          <div className={styles.price}>{plan.price}</div>
          <button
            className={`${styles.btn} ${
              plan.title === 'Premium'
                ? styles.premiumBtn
                : styles.notPremiumBtn
            }`}
          >
            {plan.btn}
          </button>
          <div className={styles.features}>
            <div style={{ fontWeight: 'bold' }}>Features available: </div>
            {plan.features.map(feature => (
              <div className={styles.singleFeature} key={feature}>
                <FaCheckCircle />
                <div>{feature}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

Pricing.displayName = 'Pricing';

export default Pricing;
