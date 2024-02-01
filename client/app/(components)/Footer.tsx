import styles from './Footer.module.css';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const SiteMap = [
  {
    title: 'Notes',
    links: [
      { id: 1, text: 'Create an account' },
      { id: 2, text: 'Login' },
      { id: 3, text: 'Pricing' },
    ],
  },
  {
    title: 'About',
    links: [
      { id: 4, text: 'Contact us' },
      { id: 5, text: 'Our team' },
    ],
  },
  {
    title: 'Resources',
    links: [{ id: 6, text: 'Blog' }],
  },
  {
    title: 'Legal',
    links: [
      { id: 7, text: 'terms of use' },
      { id: 8, text: 'privay policy' },
    ],
  },
];

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
        {SiteMap.map(sitemap => (
          <div className={styles.footerLinks} key={sitemap.title}>
            <div className={styles.linkHead}>{sitemap.title}</div>
            {sitemap.links.map(link => (
              <div className={styles.linkText} key={link.id}>
                {link.text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
