import React from "react";

import {ElementCalendar} from "./RightBlock/Calendar";
import {ElementAuthor} from "./PostsList/AuthorBlock";
import {ElementPopularPost} from "./RightBlock/PopularPost";
import {Footer} from "../Home/footer";
import {ElementSubscribe} from "./FornSubscribe/Subscribe";
import {SocialMedia} from "./RightBlock/SocialMedia";
import {ElementSmallSubscribe} from "./RightBlock/Smallsubscribe";
import {ElementADSBanner} from "./RightBlock/Adsbaner";
import {ElementFilter} from "./RightBlock/Filter";
import {ElementRecentPost} from "./RightBlock/RecentPost";
import SimpleSlider from "./RightBlock/SliderPhoto";
import Pagination from "./PostsList/Paginate";
import {FieldSearch, Menu} from "../Menu/Menu";
import SearchExample from "./RightBlock/Search";

export const Author: React.FC = () => {

    return (

        <div className="App">

            <section className={'container-news container'}>
                <div className={'container-post'}>
                    <Menu/>
                    <ElementAuthor/>
                    <Pagination/>
                    <ElementSubscribe/>

                </div>

                <div className={'container-action'}>
                    <FieldSearch/>
                    <SearchExample/>
                    <div className={'doubleblock-mobile'}>
                        <ElementPopularPost/>
                        <ElementRecentPost/>
                    </div>
                    <ElementSmallSubscribe/>
                    <SimpleSlider slidesCount={1} />
                    <SocialMedia/>
                    <ElementCalendar/>
                    <div className={'doubleblock-mobile'}>
                        <ElementADSBanner/>
                        <ElementFilter/>
                    </div>

                </div>
            </section>
            <Footer/>
        </div>
    )
};