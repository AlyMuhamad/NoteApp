'use client';

import styles from './SavedNotes.module.css';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import image from '../(assets)/(images)/5.png';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit3, FiArchive } from 'react-icons/fi';
import { TbPin, TbPinnedOff } from 'react-icons/tb';
import * as React from 'react';

interface Note {
  _id: number;
  body: string;
  selected: boolean;
  pinned: boolean;
  archived: boolean;
}

const style = {
  fontSize: '2.4rem',
  color: 'black',
  cursor: 'pointer',
};

const style2 = {
  fontSize: '2.2rem',
  color: 'black',
};

const StyledImage = styled(Image)`
  width: 30rem;
  height: 22.7rem;

  @media (max-width: 55em) {
    width: 40rem;
    height: 29rem;
  }
`;

function SavedNotes() {
  const [selectedNote, setSelectedNote] = useState(true);

  function handleEdit(item: boolean) {}

  async function handlePin(note: Note) {
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pinned: true,
      }),
    };
    await fetch(
      `http://127.0.0.1:8000/notes/addNotes/${note._id}`,
      requestOptions
    );

    setDBnoteSelected({} as Note);
  }

  async function handleUnpin(note: Note) {
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pinned: false,
      }),
    };
    await fetch(
      `http://127.0.0.1:8000/notes/addNotes/${note._id}`,
      requestOptions
    );

    setDBnoteSelected({} as Note);
  }

  async function handleArchive(note: Note) {
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        archived: true,
      }),
    };
    await fetch(
      `http://127.0.0.1:8000/notes/addNotes/${note._id}`,
      requestOptions
    );

    setDBnoteSelected({} as Note);
  }

  async function handleDelete(note: Note) {
    const deleteRequest = { method: 'DELETE' };
    await fetch(
      `http://127.0.0.1:8000/notes/addNotes/${note._id}`,
      deleteRequest
    );
    setDBnoteSelected({} as Note);
  }

  const [DBnotes, setDBnotes] = useState<Note[]>([]);
  const [DBnoteSelected, setDBnoteSelected] = useState<Note | undefined>(
    {} as Note
  );
  useEffect(() => {
    async function handleSubmit() {
      const res = await fetch('http://127.0.0.1:8000/notes/addNotes');
      const data = await res.json();
      setDBnotes(data.data.notes);
    }
    handleSubmit();
  });

  async function selectNote(id: number) {
    const res = await fetch(`http://127.0.0.1:8000/notes/addNotes/${id}`);
    const data = await res.json();
    setDBnoteSelected(data.data.note);
    console.log(data.data.note.selected);
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        selected: DBnoteSelected && !DBnoteSelected.selected,
      }),
    };
    await fetch(`http://127.0.0.1:8000/notes/addNotes/${id}`, requestOptions);
  }

  return (
    <div className={styles.section}>
      <div className={styles.headline}>
        {DBnotes.length > 0 && <div className={styles.title}>Saved Notes</div>}
        <div>
          {DBnotes.length > 0 && DBnoteSelected && DBnoteSelected.selected && (
            <div className={styles.icons}>
              <FiEdit3 style={style} onClick={() => handleEdit(selectedNote)} />
              {DBnoteSelected.pinned ? (
                <TbPinnedOff
                  style={style}
                  onClick={() => handleUnpin(DBnoteSelected)}
                />
              ) : (
                <TbPin
                  style={style}
                  onClick={() => handlePin(DBnoteSelected)}
                />
              )}
              <FiArchive
                style={style}
                onClick={() => handleArchive(DBnoteSelected)}
              />
              <RiDeleteBin6Line
                style={style}
                onClick={() => handleDelete(DBnoteSelected)}
              />
            </div>
          )}
        </div>
      </div>
      {DBnotes.length === 0 ? (
        <div className={styles.noNotesImage}>
          <StyledImage src={image} alt="an image" layout="resonsive" priority />
          <div className={styles.noNotesText}>
            No saved notes yet :( , <br />
            try to add some to make me happy :)
          </div>
        </div>
      ) : (
        DBnotes.map(DBnote => (
          <div key={DBnote._id}>
            <div
              className={styles.note}
              onClick={() => {
                selectNote(DBnote._id);
              }}
              style={{
                backgroundColor: DBnote.selected ? '#FFF' : '#cbd5e1',
              }}
            >
              <div className={styles.container}>
                <div className={styles.content}>
                  <div>{parse(`${DBnote.body}`)}</div>
                  {DBnote.pinned && <TbPin style={style2} />}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedNotes;
