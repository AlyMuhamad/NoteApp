import Header from '../(ui)/Header';
import styles from './page.module.css';

function Blog() {
  return (
    <div className={styles.section}>
      <Header />
      <div>Hello world from the blog section</div>
    </div>
  );
}

export default Blog;
