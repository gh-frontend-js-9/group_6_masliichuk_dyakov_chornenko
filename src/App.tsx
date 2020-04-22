import React from 'react';
import './App.scss';
import Header from './components/header/Header';
// import Hero from './components/hero/Hero';
// import {Footer} from "./components/footer";
// import {BlogNews} from "./components/blognews";
import Post from './components/post/Post';
import Cards from './components/cards/Cards';

import {HomePage} from "./components/Home/HomePage";
import {Author} from "./components/Author/Author";
import {Topics} from './components/Topics/Topics';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Footer } from './components/Home/footer';

function App() {
  return (
    <Router>


      <Switch>
        <Route exact path={'/'} component={HomePage}>
        </Route>
        <Route path={"/Author"} component={Author}>
        </Route>
        <Route path={'/Topics'} component={Topics}>
        </Route>

        {/* <Route exact path="/">
          <Header plain={false} />
          <Hero/>
          <Cards/>
          <BlogNews/>
        </Route> */}
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
