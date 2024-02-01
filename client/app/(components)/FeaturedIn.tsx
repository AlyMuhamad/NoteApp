import Image from 'next/image';
import styles from './FeaturedIn.module.css';
import logo1 from '../(assets)/(logos)/techcrunch.png';
import logo2 from '../(assets)/(logos)/business-insider.png';
import logo3 from '../(assets)/(logos)/forbes.png';
import logo4 from '../(assets)/(logos)/the-new-york-times.png';
import logo5 from '../(assets)/(logos)/usa-today.png';

const logos = [
  {
    id: 1,
    logo: logo1,
    width: 22.5,
    height: 3.2,
  },
  {
    id: 2,
    logo: logo2,
    width: 12.5,
    height: 4,
  },
  {
    id: 3,
    logo: logo3,
    width: 12.5,
    height: 3.3,
  },
  {
    id: 4,
    logo: logo4,
    width: 22.5,
    height: 3,
  },
  {
    id: 5,
    logo: logo5,
    width: 17.5,
    height: 3.3,
  },
];

function FeaturedIn() {
  return (
    <div className={styles.section}>
      <div className={styles.title}>As featured in</div>
      <div className={styles.logos}>
        {logos.map(logo => (
          <div
            className={`${styles.logo} ${logo.id === 5 && styles.fifthLogo}`}
            key={logo.id}
          >
            <Image
              src={logo.logo}
              alt="a logo"
              priority
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedIn;
