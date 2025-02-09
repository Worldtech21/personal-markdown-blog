import React from 'react';
import MarkdownEditor from './components/MarkdownEditor';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Personal Markdown Blog</h1>
      <MarkdownEditor />
    </div>
  );
}

export default App;
