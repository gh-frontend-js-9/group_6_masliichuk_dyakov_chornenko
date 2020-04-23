import React from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../redux/action/action";
import {Link} from "react-router-dom";

interface IState {
    cards: Object[];
}

class Cards extends React.Component<any, IState> {

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

    componentDidMount() {
        this.props.onPostsFetch();
    }

    render() {
        if (this.props.postsData.length === 0) { return <div />; }
        return (
            <section className="cards">
                <div className="container">

                {this.state.cards.map((item: any, index) => {
                    const post = this.props.postsData[index];
                    return (
                    <div key={index} className="cards__section">
                        <div className="cards__name">
                            <h2 className="cards__title">{item.sectionTitle}</h2>
                            <Link className="cards__view-all" to="/Author">View all</Link>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="cards__left-block">
                                            <address>BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS</address>
                                            <h3><Link to={'post/' + post.id}>{post.title}</Link></h3>
                                            <p>{post.body}</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="cards__right-block">
                                            <div className="row">
                                                <div className="col-6 col-md-6">
                                                    <div className="cards__item">
                                                        <h4>FREELANCING</h4>
                                                        <Link to={'post/' + post.id}>{post.title}</Link>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 col-6">
                                                    <div className="cards__item">
                                                            <h4>RESOURCE</h4>
                                                            <Link to={'post/' + post.id}>{post.title}</Link>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-6 col-md-6">
                                                    <div className="cards__item">
                                                        <h4>DESIGN PROCESS</h4>
                                                        <Link to={'post/' + post.id}>{post.title}</Link>
                                                    </div>
                                                </div>

                                                <div className="col-6 col-md-6">
                                                    <div className="cards__item">
                                                        <h4>INSPIRATION</h4>
                                                        <Link to={'post/' + post.id}>{post.title}</Link>
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

const mapStateToProps = ({posts}: any) => {
    return {
        postsData: posts.fetchedPosts,
    };
}
const mapDispatchToProps = (dispatch: any) => ({
    onPostsFetch: () => {
        dispatch(fetchPosts());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);