import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      <Switch>

      <Route path="/">
        <Home />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
