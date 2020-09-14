import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Comments from './components/Comments/Comments';
import Header from './components/NewsFeed/Header/Header';
import NewsFeed from './components/NewsFeed/NewsFeed';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  
  return (
    <>
      <Router>

        <Header></Header>

        <Switch>

          <Route exact path="/">
            <NewsFeed />
          </Route>

          <Route path="/newsFeed">
            <NewsFeed />
          </Route>

          <Route path="/post/:id">
              <Comments/>
            </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
