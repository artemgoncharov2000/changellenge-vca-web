import React from 'react';
import './App.scss';
import { cn } from '@bem-react/classname';
import Logo from './assets/logo/changellenge-logo-white.png';
import Form from "./pages/Form/Form";
import {
    Routes,
    Route, useParams
} from "react-router-dom";
import Feedback from "./pages/Feedback/Feedback";
import Suggest from "./pages/Suggest/Suggest";
import Landing from "./pages/Landing/Landing";

const cnHeader = cn('Header');
const cnBody = cn('Body');

function App() {

  const params = useParams();
  console.log(params);
  return (
    <div className={'app'}>
      <div className={cnHeader()}>
        <img className={cnHeader('Logo')} src={Logo} alt={'changellenge-logo-white'}/>
      </div>
      <div className={'main'}>
          <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/form" element={<Form />}/>
              <Route path="/feedback" element={<Feedback />}/>
              <Route path="/suggest" element={<Suggest />}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
