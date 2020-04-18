import React from "react";
import {ElementCalendar} from "./RightBlock/Calendar";
import {ElementAuthor} from "./PostsList/AuthorBlock";
import {ElementSearch} from "./RightBlock/Search";
import {ElementPopularPost} from "./RightBlock/PopularPost";
import ElementPostData from "./PostsList/Posts";
import {Footer} from "../Home/footer";
import {ElementSubscribe} from "./FornSubscribe/Subscribe";
import {SocialMedia} from "./RightBlock/SocialMedia";
import {ElementSmallSubscribe} from "./RightBlock/Smallsubscribe";
import {ElementADSBanner} from "./RightBlock/Adsbaner";
import {ElementFilter} from "./RightBlock/Filter";
import {ElementRecentPost} from "./RightBlock/RecentPost";
import SimpleSlider from "./RightBlock/SliderPhoto";
import {ElementPaginate} from "./PostsList/Pagination";
//import ElementPaginateNew from "./PostsList/Paginate";

export const Author: React.FC = () => {

    return (

        <div className="App">
            <div className={'header__nav header__nav--open header__nav'}>
                <ul>
                    <li><a href="../../Author">Popular</a></li>
                    <li><a href={"../Author"}>New</a></li>
                    <li><a href="../../Author">Reading list</a></li>
                    <li><a href="../../Author">Topics</a></li>
                    <li><a href="../../Author">Subscribe</a></li>
                </ul>
            </div>
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
                    <ElementRecentPost/>
                    <ElementSmallSubscribe/>
                    <SimpleSlider/>
                    <SocialMedia/>
                    <ElementCalendar/>
                    <ElementADSBanner/>
                    <ElementFilter/>
                </div>
            </section>
            <Footer/>
        </div>


    )
};