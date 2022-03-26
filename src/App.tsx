import React from 'react';
import './App.scss';
import Logo from './assets/logo/changellenge-logo-white.png';
import Form from "./pages/Form/Form";
import {
    Routes,
    Route, Link,
} from "react-router-dom";
import Feedback from "./pages/Feedback/Feedback"
import Suggest from "./pages/Suggest/Suggest";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div className={'app'}>
      <header className={'header'}>
          <Link to={'/'} target="_blank">
              <img className={'header-logo'} src={Logo} alt={'changellenge-logo-white'}/>
          </Link>
      </header>
      <main className={'main'}>
          <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/form" element={<Form />}/>
              <Route path="/feedback" element={<Feedback />}/>
              <Route path="/suggest/:sessionId" element={<Suggest />}/>
          </Routes>
      </main>
    </div>
  );
}

export default App;
