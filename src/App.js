import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import FirstProblem from './components/FirstProblem';
import SecondProblem from './components/SecondProblem';
import ThirdProblem from './components/ThirdProblem';
import Home from './components/Home';

function App() {

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/problem-1" component={FirstProblem} />
          <Route path="/problem-2" component={SecondProblem} />
          <Route path="/problem-3" component={ThirdProblem} />
          <Route path="/" component={Home} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
