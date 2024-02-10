import Header from '../(ui)/Header';
import styles from './page.module.css';

function Blog() {
  return (
    <div className={styles.section}>
      <Header />
      <div className={styles.text}>
        Welcome to our blog, we are still working on this feature
      </div>
    </div>
  );
}

export default Blog;
