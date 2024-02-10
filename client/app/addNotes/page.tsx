'use client';

import styles from './page.module.css';
import { useState } from 'react';
import AppLayout from '../(ui)/AppLayout';
import { Editor } from '@tinymce/tinymce-react';
import Link from 'next/link';

function AddNotes() {
  const [value, setValue] = useState<string | undefined>();
  const [text, setText] = useState<string | undefined>('');
  const [authenticated, setAuthenticated] = useState(
    typeof window !== 'undefined' && localStorage.getItem('token')
      ? true
      : false
  );

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (!text) return;

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        body: text,
        user: '65c4d343a1d977f90308ca2a',
      }),
    };

    if (authenticated) {
      await fetch('http://127.0.0.1:5000/notes/addNotes', requestOptions);
    }

    setText('');
  }

  return (
    <AppLayout>
      <Editor
        apiKey="52rb5jrn1gbmngwnhw3k5ngd5eqqrhv4lpkmvh8xycaqxmeu"
        onEditorChange={(newValue, editor) => {
          setValue(newValue);
          setText(editor.getContent({ format: 'html' }));
        }}
        onInit={(evt, editor) => {
          setText(editor.getContent({ format: 'html' }));
        }}
        id="tinycmeEditor"
        value={text}
        init={{
          // selector: 'textarea',
          placeholder: 'Start typing here...',
          body_class: 'my_class',
          skin: 'borderless',
          max_width: 800,
          height: 630,
          // max_height: 600,
          resize: false,
          branding: false,
          // content_style:
          //   'body { font-family:Helvetica,Arial,sans-serif; font-size:14px;}',
          content_style: 'body { font-family: "Poppins";}',
          toolbar:
            'undo redo | bold italic underline strikethrough | blocks fontfamily fontsize | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          plugins:
            'mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage inlinecss tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography ',
          //
        }}
      />
      <button className={styles.btn} onClick={handleSubmit}>
        Add note
      </button>
    </AppLayout>
  );
}

export default AddNotes;
