import React from "react";
import {BlogNews} from "./blognews";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import {Footer} from "./footer";
import {SliderHome} from "./sliderHome/SliderHome";
import Cards from "../cards/Cards";


export const HomePage: React.FC = (props: any) => {

    return (

        <div className="App">
            <Header/>
            <Hero/>
            <Cards/>
            <SliderHome/>
            <BlogNews/>
            <Footer/>
        </div>

    )
};