import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import {Footer} from "./components/footer";
import {BlogNews} from "./components/blognews";
import Cards from './components/cards/Cards';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Cards/>
      <BlogNews/>
      <Footer/>
      
    </div>
  );
}

export default App;
