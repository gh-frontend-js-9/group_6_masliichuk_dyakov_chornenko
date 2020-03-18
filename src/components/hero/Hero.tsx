import React from 'react';
import Slider from 'infinite-react-carousel';

export default class Hero extends React.Component {
    render() {
        return (
            <section className="hero">
                <Slider className="hero__carousel" arrows={false} dots>
                    <div className="hero__slide" >
                        <div className="container" >
                            <div className="hero__content" >
                                <h4>BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS</h4>
                                <h1>How to Create a PayPal Donate Button for Your WordPress Site</h1>
                                <h3>User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="hero__slide" >
                        <div className="container" >
                            <div className="hero__content" >
                                <h4>BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS</h4>
                                <h1>How to Create a PayPal Donate Button for Your WordPress Site</h1>
                                <h3>User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</h3>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        )

    }

}