import styles from './AppLayout.module.css';
import SavedNotes from '../(components)/SavedNotes';
import Sidebar from './Sidebar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.appLayout}>
      <Sidebar />
      <SavedNotes />
      <div className={styles.core}>{children}</div>
    </div>
  );
};

export default AppLayout;
