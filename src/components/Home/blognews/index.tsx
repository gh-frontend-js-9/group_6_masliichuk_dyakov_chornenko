import React from "react";
import {fakeData} from "../../data/data";

export const BlogNews: React.FC = (props: any) => {

    return (
        <section className={'article-container'}>
            <div className={'article container'}>
                {fakeData.map((news: any, index) =>
                    <div key={index} className={'col-article'}>

                        <div>
                            <img src={news.image} alt={'content-calendar'}/>
                        </div>

                        <div className={'article-author'}>
                            <span className={'style-prepositions-article'}> BY </span>
                            <a href={'post/Post'}>{news.author}</a>
                            <span className={'style-prepositions-article'}> IN </span>
                            <a href={'post/Post'}>{news.resource}</a>
                        </div>

                        <h3 className={'article-title'}><a href={'post/Post'}>{news.title}</a></h3>

                        <p className={'article-content'}> {news.content}</p>
                    </div>)}
            </div>

        </section>
    )
};