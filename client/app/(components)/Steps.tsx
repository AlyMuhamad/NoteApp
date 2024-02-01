import styles from './Steps.module.css';
import { RefObject, forwardRef, useImperativeHandle, useRef } from 'react';

const StepsData = [
  {
    order: '01 ',
    title: 'SignUp',
    description: [
      'Visit Notes website.',
      'Click on the "Sign Up" button and fill in your details.',
      'Verify your email to activate your account.',
      'Create a secure password during the setup process.',
    ],
    arrow: true,
  },
  {
    order: '02 ',
    title: 'Create Your First Note',
    description: [
      'Log in to your account.',
      'Get comfortable with the user-friendly dashboard.',
      'Initiate your first note.',
      'Utilize formatting options and explore additional features in the toolbar ',
    ],
    arrow: true,
  },
  {
    order: '03 ',
    title: 'Organize, Collaborate, and Sync',
    description: [
      'Organize your notes by creating folders or categories.',
      'Collaborate by sharing notes with others.',
      'Access your notes across devices – desktop, tablet, or mobile.',
      'Utilize cross-device synchronization for a smooth workflow.',
    ],
    arrow: false,
  },
];

// interface StepsProps {
//   props: null;
//   ref: RefObject<HTMLButtonElement>;
// }

const Steps = forwardRef((props, ref) => {
  const myRef = useRef<null | HTMLDivElement>(null);
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      myRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
  }));

  return (
    <div className={styles.section} ref={myRef}>
      <div className={styles.label}>How it works</div>
      <div className={styles.headline}>
        Getting Started with Notes: A Quick Guide
      </div>
      <div className={styles.subHead}>
        It is easy as 1, 2, 3. Our app will help you to save your valuable ideas
      </div>
      <div className={styles.steps}>
        {StepsData.map(step => (
          <div className={styles.orderedStep} key={step.order}>
            <div className={styles.order}>{step.order}</div>
            <div className={styles.step}>
              <div className={styles.title}>{step.title}</div>
              <div className={styles.details}>
                {step.description.map(description => (
                  <div key={description} style={{ fontSize: '1.8rem' }}>
                    {description}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        Congrats! You are now up and running with Notes. Feel free to delve into
        advanced features for an even richer note-taking experience. For
        additional assistance, consult our Help Center or reach out to our
        support team. Happy note-taking!
      </div>
    </div>
  );
});

Steps.displayName = 'Steps';

export default Steps;
