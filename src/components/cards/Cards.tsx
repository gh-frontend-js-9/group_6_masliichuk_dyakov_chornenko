import React, { SyntheticEvent } from 'react';

interface IProps {}

interface IState {
    cards: Object[];
}

export default class Cards extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            cards: [
                { sectionTitle: 'Popular' },
                { sectionTitle: 'Essentials' },
                { sectionTitle: 'Freelance' },
            ]
        };
    }

    render() {
        return (
            <section className="cards">
                <div className="container">

                {this.state.cards.map((item: any, index) => {
                    return (
                    <div className="cards__section">
                        <div className="cards__name">
                            <h2 className="cards__title">{item.sectionTitle}</h2>
                            <a className="cards__view-all" href="#">View all</a>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="cards__left-block">
                                        <address>BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS</address>
                                        <h3><a href="#">How to Boost Conversions on Your WooCommerce Product Pages</a></h3>
                                        <p>User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="cards__right-block">
                                            <div className="row">
                                                <div className="col-6 col-md-6">
                                                    <div className="cards__item">
                                                        <h4>FREELANCING</h4>
                                                        <a href="#">7 Best WordPress Caching Plugins for 2018</a>>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 col-6">
                                                    <div className="cards__item">
                                                            <h4>RESOURCE</h4>
                                                            <a href="#">Kinsta Kingpin: Interview with Kevin Muldoon</a>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-6 col-md-6">
                                                    <div className="cards__item">
                                                        <h4>DESIGN PROCESS</h4>
                                                        <a href="#">8 Ways To Leverage LinkedIn for Marketing</a>>
                                                    </div>
                                                </div>

                                                <div className="col-6 col-md-6">
                                                    <div className="cards__item">
                                                            <h4>INSPIRATION</h4>
                                                            <a href="#">Working Remotely – Everything You Need</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>

                    </div>
                    )
                })}
                </div>
            </section>
            
        )
    }

}