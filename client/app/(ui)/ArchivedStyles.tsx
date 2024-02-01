import styles from './ArchivedStyles.module.css';
import { MdRestore } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

const style = {
  fontSize: '2.4rem',
  color: 'black',
  cursor: 'pointer',
};

const ArchivedHeader = ({ children }: { children: React.ReactNode }) => {
  // function ArchivedHeader({ children }) {
  return (
    <div className={styles.headline}>
      <div className={styles.title}>Archived Notes</div>
      {children}
    </div>
  );
};

interface Note {
  _id: number;
  body: string;
  selected: boolean;
  pinned: boolean;
  archived: boolean;
}

interface HeadProps {
  selectednote: Note;
}

const HeadlineOptions: React.FC<HeadProps> = selectednote => {
  function handleRestore() {}
  function handleErase() {}

  return (
    <div className={styles.icons}>
      <MdRestore style={style} onClick={() => handleRestore()} />
      <RiDeleteBin6Line style={style} onClick={() => handleErase()} />
      <div></div>
    </div>
  );
};

export { ArchivedHeader, HeadlineOptions };
