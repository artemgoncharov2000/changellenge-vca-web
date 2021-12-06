import React from 'react';
import './App.scss';
import { cn } from '@bem-react/classname';
import Logo from './assets/logo/changellenge-logo-white.png';

const cnApp = cn('App');
const cnHeader = cn('Header');
const cnBody = cn('Body');

function App() {
  return (
    <div className={cnApp()}>
      <div className={cnHeader()}>
        <img className={cnHeader('Logo')} src={Logo} alt={'changellenge-logo-white'}/>
      </div>
      <div className={cnBody()}>
        hi
      </div>
    </div>
  );
}

export default App;
