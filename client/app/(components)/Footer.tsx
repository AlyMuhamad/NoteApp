import styles from './Footer.module.css';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const SocialIcon = styled(FaFacebook)`
  font-size: 3.2rem;
  cursor: pointer;

  @media (max-width: 62.5em) {
    font-size: 2rem;
  }
`;

function Footer() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.title}>Notes</div>
          <div className={styles.slogan}>
            Ignite Your Creativity, Conquer Your Productivity Goals Today!
          </div>
          <div className={styles.socialMedia}>
            <SocialIcon />
            <SocialIcon as={FaInstagram} />
            <SocialIcon as={FaTwitter} />
            <SocialIcon as={FaYoutube} />
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.linkHead}>Notes</div>
          <Link href="/signup" className={styles.linkText}>
            Create an account
          </Link>
          <Link href="/signup" className={styles.linkText}>
            Login
          </Link>
          <Link href="/" className={styles.linkText}>
            Pricing
          </Link>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.linkHead}>About</div>
          <Link href="/contact" className={styles.linkText}>
            Contact us
          </Link>
          <Link href="/" className={styles.linkText}>
            Our team
          </Link>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.linkHead}>Resources</div>
          <Link href="/blog" className={styles.linkText}>
            Blog
          </Link>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.linkHead}>Legal</div>
          <Link href="/" className={styles.linkText}>
            Terms of use
          </Link>
          <Link href="/" className={styles.linkText}>
            Privacy policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
