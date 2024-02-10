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

function SavedNotes() {
  const [DBnotes, setDBnotes] = useState<Note[]>([]);
  const [DBnoteSelected, setDBnoteSelected] = useState<Note | undefined>(
    {} as Note
  );

  function handleEdit(note: Note) {}

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
      `http://localhost:5000/api/v1/notes/addNotes/${note._id}`,
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
      `http://127.0.0.1:5000/api/v1/notes/addNotes/${note._id}`,
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
      body: JSON.stringify({ archived: true }),
    };
    await fetch(
      `http://127.0.0.1:5000/api/v1/notes/addNotes/${note._id}`,
      requestOptions
    );

    setDBnoteSelected({} as Note);
  }

  async function handleDelete(note: Note) {
    const deleteRequest = { method: 'DELETE' };
    await fetch(
      `http://127.0.0.1:5000/api/v1/notes/addNotes/${note._id}`,
      deleteRequest
    );
    setDBnoteSelected({} as Note);
  }

  useEffect(() => {
    async function getNotes() {
      const res = await fetch(
        'http://127.0.0.1:5000/api/v1/notes/addNotes?archived=false'
      );
      const data = await res.json();
      setDBnotes(data.data.notes);
    }
    getNotes();
  });

  return (
    <div className={styles.section}>
      <div className={styles.headline}>
        {DBnotes.length > 0 && <div className={styles.title}>Saved Notes</div>}
        <div>
          {DBnotes.length > 0 && DBnoteSelected && (
            <div className={styles.icons}>
              <FiEdit3
                className={styles.edit}
                onClick={() => handleEdit(DBnoteSelected)}
              />
              {DBnoteSelected.pinned ? (
                <TbPinnedOff
                  className={styles.pinoff}
                  onClick={() => handleUnpin(DBnoteSelected)}
                />
              ) : (
                <TbPin
                  className={styles.pin}
                  onClick={() => handlePin(DBnoteSelected)}
                />
              )}
              <FiArchive
                className={styles.archive}
                onClick={() => handleArchive(DBnoteSelected)}
              />
              <RiDeleteBin6Line
                className={styles.delete}
                onClick={() => handleDelete(DBnoteSelected)}
              />
            </div>
          )}
        </div>
      </div>
      {DBnotes.length === 0 ? (
        <div className={styles.noNotesContent}>
          <Image
            src={image}
            alt="an image"
            layout="resonsive"
            priority
            className={styles.noNotesImage}
          />
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
                setDBnoteSelected(DBnoteSelected ? undefined : DBnote);
              }}
              style={
                {
                  // backgroundColor: DBnoteSelected && '#FFF',
                }
              }
            >
              <div className={styles.container}>
                <div className={styles.content}>
                  <div>{parse(`${DBnote.body}`)}</div>
                  {DBnote.pinned && <TbPin className={styles.pinned} />}
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
