import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"

import './App.css';
import Links from "./Component/Links";
import LogIn from './Component/LogIn';
import Chat from "./Component/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Links />
        <Route exact path="/" component={LogIn} />
        <Route path="/chat/:id" render ={(props) => <Chat username={props.match.params.id} />} />
      </Router>
    </div>
  );
}

export default App;
