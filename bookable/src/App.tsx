import React, { useState } from 'react';
import {
  OutputData
} from '@editorjs/editorjs/types';
import './App.css';
import Editor from './components/editor';

const DEFAULT_INITIAL_DATA: OutputData = {
  "time": new Date().getTime(),
  "blocks": [
    {
      "type": "header",
      "data": {
        "text": "This is my awesome editor!",
        "level": 1
      }
    },
  ]
}

const App: React.FC = () => {
  const [contentData, setContentData] = useState(DEFAULT_INITIAL_DATA);

  return (
    <div className="App">
      <h1>Editor</h1>
      <Editor content={contentData} onSave={setContentData} />
    </div>
  );
}

export default App;
