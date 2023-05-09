/* eslint-disable no-unused-vars */
import React from 'react';
import MarkdownInput from './components/MardownInput/MarkdownInput.jsx';
import NoteDisplay from './components/NoteDisplay/NoteDisplay.jsx';

export const App = () => {
  return (
    <div>
      <MarkdownInput />
      <NoteDisplay />
    </div>
  );
};