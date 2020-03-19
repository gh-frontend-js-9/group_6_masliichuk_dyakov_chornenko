import React from "react";
import {fakeData} from "../data/data";

export const BlogNews: React.FC = (props: any) => {

    return (
        <section className={'article-container container'}>
            {fakeData.map((news: any) =>
                <div className={'col-article'}>

                    <div>
                        <img src={news.image} alt={'content-news'}/>
                    </div>

                    <div className={'article-author'}>
                        <span className={'style-prepositions-article'}> BY </span>
                        <a href={'#'}>{news.author}</a>
                        <span className={'style-prepositions-article'}> IN </span>
                        <a href={'#'}>{news.resource}</a>
                    </div>

                    <h3 className={'article-title'}><a href={'#'}>{news.title}</a></h3>

                    <p className={'article-content'}> {news.content}</p>
                </div>)}
        </section>
    )
}