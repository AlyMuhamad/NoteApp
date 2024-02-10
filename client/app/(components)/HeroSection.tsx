'use client';
import styles from './HeroSection.module.css';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import image from '../(assets)/(images)/9.jpg';
import { RefObject } from 'react';
import Header from '../(ui)/Header';

// import dynamic from 'next/dynamic';
// const Header = dynamic(() => import('../(ui)/Header'), { ssr: false });

const HeroImage = styled(Image)`
  @media (max-width: 43.75em) {
    padding: 0 3rem;
  }
  @media (max-width: 40.625em) {
    padding: 0 6rem;
  }
`;

interface HeroProps {
  scrollToSteps: RefObject<HTMLButtonElement>;
}

const HeroSection: React.FC<HeroProps> = ({ scrollToSteps }) => {
  const scroll = () => {
    scrollToSteps.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <div className={styles.section}>
        <Header />
        <div className={styles.content}>
          <div className={styles.headline}>
            Notes: Ignite Your Creativity, Conquer Your Productivity Goals!
          </div>
          <div className={styles.description}>
            Dive into a seamless note-taking experience designed to enhance your
            productivity and creativity. Whether you are a student,
            professional, or creative thinker, our intuitive platform offers
            powerful tools to capture, organize, and explore your thoughts
            effortlessly.
          </div>
          <div className={styles.btns}>
            <Link
              className={`${styles.navLink} ${styles.primaryNav}`}
              href="/addNotes"
            >
              Start taking notes
            </Link>
            <button
              className={`${styles.navLink} ${styles.secondaryNav}`}
              onClick={scroll}
            >
              How it works
            </button>
          </div>
        </div>

        <HeroImage
          // <Image
          src={image}
          alt="an illustration"
          priority
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
