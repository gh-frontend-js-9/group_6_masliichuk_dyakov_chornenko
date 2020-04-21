import React from "react";
import {BlogNews} from "./blognews";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import {Footer} from "./footer";


export const HomePage: React.FC = (props: any) => {

    return (

        <div className="App">
            <Header/>
            <Hero/>
            <BlogNews/>
            <Footer/>
        </div>

    )
};