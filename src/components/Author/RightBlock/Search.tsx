import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {fetchPosts} from "../../redux/action/action";
import iconsearch from "../../../assets/images/newpage/iconsearch.png";

interface ISearch {

    searchString: string
}

class SearchExample extends React.Component <any, ISearch, any> {

    state: ISearch = {
        searchString: ''
    };
    handleChange = (event: any) => {
        this.setState({searchString: event.target.value});
    };

    render(): any {

        let libraries = this.props.postsData;
        let searchString = this.state.searchString.trim().toLowerCase();
        if (searchString.length > 0) {
            libraries = libraries.filter(function (i: any) {
                return i.title.toLowerCase().match(searchString);
            });
            return (<div className={'container-search'} id="cover">
                <form method="get" action="">
                    <div className="tb">
                        <div className="td"><input type="text" placeholder={'Type something…'}
                                                   value={this.state.searchString} required
                                                   onChange={this.handleChange}/></div>
                        <div className="td">
                            <button type="submit">
                                <div><img src={iconsearch}/></div>
                            </button>
                        </div>
                    </div>
                </form>
                <div className={'window-results-search'}>
                    <ul>
                        {libraries.map((i: any) => {
                            return <li key={i.id}><a href={'#'}>{i.title}</a></li>;
                        })}
                    </ul>
                </div>
            </div>)
        }
        return (
            <div className={'container-search'} id="cover">
                <form method="get" action="">
                    <div className="tb">
                        <div className="td"><input type="text" placeholder={'Type something…'}
                                                   value={this.state.searchString} required
                                                   onChange={this.handleChange}/></div>
                        <div className="td">
                            <button type="submit">
                                <div><img src={iconsearch}/></div>
                            </button>
                        </div>
                    </div>
                </form>
                <ul>

                </ul>
            </div>
        );
    }
}


const mapStateToProps = ({posts}: any) => {

    return {
        postsData: posts.fetchedPosts,
    };
};
const mapDispatchToProps = (dispatch: any) => ({
    fetchedPost: bindActionCreators(fetchPosts(), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchExample);