import React from 'react';
import './App.scss';
import { cn } from '@bem-react/classname';

const cnApp = cn('App');

function App() {
  return (
    <div className={cnApp()}>

    </div>
  );
}

export default App;
