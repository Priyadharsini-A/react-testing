import React from 'react';

import './App.css';
import { Application } from './components/application/application';
import { Skills } from './components/skills/skills';

function App() {
  return (
    
    <>
    <Skills skills={['HTML', 'CSS']} />
    </>
  );
}

export default App;
