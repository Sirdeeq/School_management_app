import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'katex/dist/katex.min.css';
import 'react-quill/dist/quill.snow.css';

const Exams = () => {
  const [text, setText] = useState('');

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      [{ 'code-block': true }],
      [{ color: [] }, { background: [] }],
      ['clean']
    ],
    clipboard: {
      matchVisual: false
    }
  };

  return (
    <div>
      <ReactQuill
        value={text}
        onChange={setText}
        modules={modules}
        formats={[
          'header',
          'font',
          'size',
          'bold',
          'italic',
          'underline',
          'strike',
          'blockquote',
          'list',
          'bullet',
          'link',
          'image',
          'video',
          'code-block',
          'color',
          'background'
        ]}
      />
    </div>
  );
};

export default Exams;
