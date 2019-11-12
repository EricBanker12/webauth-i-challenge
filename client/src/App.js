import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';

import { Navbar } from './components'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' component={Navbar} />
        {/* <Route path='/register' component={} />
        <Route path='/login' component={} />
        <Route path='/users' component={} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;