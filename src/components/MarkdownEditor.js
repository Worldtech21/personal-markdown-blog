import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('# Welcome to my blog!\n\nStart typing your **Markdown** here...');

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{ flex: 1, height: '400px', padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <div
        style={{ flex: 1, height: '400px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', overflowY: 'auto', backgroundColor: '#fff' }}
      >
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
