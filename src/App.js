import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "./Cards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Cards />
            <SwipeButtons />
          </Route>
          <Route exact path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
