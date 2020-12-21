import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import FirstProblem from './components/FirstProblem';

function App() {

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/problem-1" component={FirstProblem} />
          <Route path="/problem-2">
            <Problem2 />
          </Route>
          <Route path="/problem-3">
            <Problem3 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Problem2() {
  return <h2>Problem 2</h2>;
}

function Problem3() {
  return <h2>Problem 3</h2>;
}

export default App;
