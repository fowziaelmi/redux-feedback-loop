import React from 'react';
import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments.jsx';
import Support from '../Support/Support.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Feeling from '../Feeling/Feeling';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
        <Router>
          <Route path="/Comments">
            <Comments />
          </Route>
          <Route path="/Understanding">
            <Understanding />
          </Route>
          <Route path="/Feeling">
            <Feeling />
          </Route>
          <Route path="/Support">
            <Support />
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
