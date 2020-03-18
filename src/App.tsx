import React from 'react';
import './App.scss';
import {Footer} from "./components/footer";
import {BlogNews} from "./components/blognews";

function App() {
    return (
        <div className="App">
            <BlogNews/>
            <Footer/>
        </div>
    );
}

export default App;
