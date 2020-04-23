import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Hero from './components/Home/hero/Hero';
import {Footer} from "./components/footer";
import {BlogNews} from "./components/Home/blognews";
import {SliderHome} from "./components/Home/sliderHome/SliderHome";
import Post from './components/post/Post';
import Cards from './components/cards/Cards';

import {Author} from "./components/Author/Author";
import {Topics} from './components/Topics/Topics';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>


      <Switch>
        <Route exact path={'/'} >
          <Header plain={false} />
          <Hero/>
          <Cards/>
          <SliderHome/>
          <BlogNews/>
          <Footer/>
        </Route>
        <Route path={"/Author"} component={Author}>
        </Route>
        <Route path={'/Topics'} component={Topics}>
        </Route>
        <Route path="/post/:id">
          <Header plain={true} />
          <Post />
        </Route>
        
      </Switch>

      <Footer/>
      
    </Router>
  );
}

export default App;
