'use client';

import { MdRestore } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import styles from './page.module.css';
import AppLayout from '../(ui)/AppLayout';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';

interface Note {
  _id: number;
  body: string;
  selected: boolean;
  pinned: boolean;
  archived: boolean;
}

function Archive() {
  const [DBArchive, setDBArchive] = useState<Note[]>([]);
  const [selectednote, setSelectednote] = useState<Note | undefined>();

  async function handleRestore(note: Note) {
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ archived: false }),
    };
    await fetch(
      `http://127.0.0.1:5000/notes/addNotes/${note._id}`,
      requestOptions
    );

    setSelectednote(undefined);
  }

  async function handleErase(note: Note) {
    const deleteRequest = { method: 'DELETE' };
    await fetch(
      `http://127.0.0.1:5000/notes/addNotes/${note._id}`,
      deleteRequest
    );
    setSelectednote(undefined);
  }

  useEffect(() => {
    async function getArchivedNotes() {
      const res = await fetch(
        'http://127.0.0.1:5000/notes/addNotes?archived=true'
      );
      const data = await res.json();
      setDBArchive(data.data.notes);
    }
    getArchivedNotes();
  });

  return (
    <AppLayout>
      <div className={styles.section}>
        <div className={styles.headline}>
          <div className={styles.title}>Archived Notes</div>
          {selectednote && (
            <div className={styles.icons}>
              <MdRestore
                className={styles.restore}
                onClick={() => handleRestore(selectednote)}
              />
              <RiDeleteBin6Line
                className={styles.delete}
                onClick={() => handleErase(selectednote)}
              />
            </div>
          )}
        </div>
        {DBArchive.map(note => (
          <div
            key={note._id}
            className={styles.archivedNote}
            onClick={() => setSelectednote(selectednote ? undefined : note)}
            style={{
              backgroundColor: selectednote === note ? '#FFF' : '#cbd5e1',
            }}
          >
            {parse(`${note.body}`)}
          </div>
        ))}
      </div>
    </AppLayout>
  );
}

export default Archive;
