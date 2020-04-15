import React from "react";
import {ElementCalendar} from "./calendar";
import {ElementAuthor} from "./author";
import {ElementSearch} from "./search";
import {ElementPopularPost} from "./popularpost";
import ElementPostData from "./posts";
import {ElementPaginate} from "./pangination";
import {Footer} from "../footer";
import {ElementSubscribe} from "./subscribe";
import {SocialMedia} from "./socialmedia";
import {ElementSmallSubscribe} from "./smallsubscribe";
import {ElementADSBanner} from "./adsbaner";


export const NewPage: React.FC = () => {

    return (

        <div className="App">
            <section className={'container-news container'}>
                <div className={'container-post'}>
                    <ElementAuthor/>
                    <ElementPostData/>
                    <ElementPaginate/>
                    <ElementSubscribe/>
                </div>

                <div className={'container-action'}>
                    <ElementSearch/>
                    <ElementPopularPost/>
                    <ElementSmallSubscribe/>
                    <SocialMedia/>
                    <ElementCalendar/>
                    <ElementADSBanner/>
                </div>
            </section>
            <Footer/>
        </div>


    )
};