import React from 'react';
import { createReactEditorJS } from 'react-editor-js';
import { EditorCore } from '@react-editor-js/core';
import {
  OutputData,
} from '@editorjs/editorjs/types';

import { EDITOR_JS_TOOLS } from './plugins/constants';

type EditorProps = {
  content: OutputData;
  onSave: (value: OutputData) => void;
}

const ReactEditorJS = createReactEditorJS();

const Editor: React.FC<EditorProps> = ({ content, onSave }) => {
  const editorCore = React.useRef<EditorCore | null>(null)

  const handleInitialize = React.useCallback((instance: EditorCore) => {
    editorCore.current = instance
  }, []);

  const handleSave = React.useCallback(async () => {
    if (editorCore.current) {
      const savedData = await editorCore.current.save();
      onSave(savedData);
    }
  }, [onSave]);

  return (
    <div style={{
      display: 'grid',
      gap: '1rem',
      gridTemplateColumns: '1fr 400px'
    }}>
      <ReactEditorJS
        defaultValue={content}
        onChange={handleSave}
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
        tunes={['anchorTune']}
      />
      <pre style={{
        position: 'sticky',
        top: 60,
        border: 'solid 1px #DDD',
        borderRadius: '8px',
        padding: '1rem'
      }}>{JSON.stringify(content, null, 2)}</pre>
    </div>
  )
}

export default Editor;
