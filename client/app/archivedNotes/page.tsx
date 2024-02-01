'use client';

import styles from './page.module.css';
import AppLayout from '../(ui)/AppLayout';
import parse from 'html-react-parser';
import { ArchivedHeader, HeadlineOptions } from '../(ui)/ArchivedStyles';
import { SetStateAction, useState } from 'react';

interface Note {
  _id: number;
  body: string;
  selected: boolean;
  pinned: boolean;
  archived: boolean;
}

function Archive() {
  const archivedNotes: Note[] = [];

  const [selectednote, setSelectednote] = useState<Note | undefined>();

  return (
    <AppLayout>
      <div className={styles.section}>
        <ArchivedHeader>
          {selectednote && <HeadlineOptions selectednote={selectednote} />}
        </ArchivedHeader>
        {archivedNotes.map(note => (
          <div key={note._id}>
            <div
              onClick={() =>
                selectednote
                  ? setSelectednote({} as Note)
                  : setSelectednote(note)
              }
              style={{
                backgroundColor: selectednote === note ? '#FFF' : '#cbd5e1',
              }}
            >
              <div>
                <div>{parse(`${note.body}`)}</div>
              </div>
              {/* <NoteDate>{formatDate(note.id)}</NoteDate> */}
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}

export default Archive;
