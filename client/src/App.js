import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

import { Navbar, Users, Form } from './components'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' component={Navbar} />
        <Route path={['/register', '/login']} component={Form} />
        <Route path='/users' component={Users} />
      </div>
    </BrowserRouter>
  );
}

export default App;