import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import {Footer} from "./components/footer";
import {BlogNews} from "./components/blognews";
import Post from './components/post/Post';
import Cards from './components/cards/Cards';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>


      <Switch>
        <Route exact path="/">
          <Header plain={false} />
          <Hero/>
          <Cards/>
          <BlogNews/>
        </Route>
        <Route path="/post">
          <Header plain={true} />
          <Post />
        </Route>
        
      </Switch>

      <Footer/>
      
    </Router>
  );
}

export default App;
