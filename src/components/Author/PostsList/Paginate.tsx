import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {fetchPosts} from "../../redux/action/action";


interface IPagination {
    currentPage: number,
    displayPerPage: number
}

class Pagination extends React.Component <any, IPagination, any> {

    state: IPagination = {
        currentPage: 1,
        displayPerPage: 3
    };

    handleClick = (event: any): void => {
        this.setState({
            currentPage: Number(event.target.id),
        });
    };

    render(): any {
        const {currentPage, displayPerPage} = this.state;
        const {fetchedPosts} = this.props.postsData;

        const indexOfLastPost = currentPage * displayPerPage;
        const indexOfFirstPost = indexOfLastPost - displayPerPage;
        const currentPost = fetchedPosts.slice(indexOfFirstPost, indexOfLastPost);

        const renderPosts = currentPost.map((post: any, index: number) => {
            return <li key={index}>
                <div className={'item-news'}>
                    <div>
                        <img
                            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                            alt={'ITstep'}/>
                    </div>
                    <div>
                        <p className={'author-post'}>
                            <span className={'author-post-style'}>BY </span> TOMAS LAURINAVICIUS <span
                            className={'author-post-style'}>IN  </span> RESOURCE
                        </p>
                    </div>
                    <h3 className={'post-item-title'}><Link to={'/post/' + post.id}>{post.title}</Link></h3></div>
            </li>;
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(fetchedPosts.length / displayPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(numberPage => {
            return (
                <li key={numberPage}>
                    <button key={numberPage}
                            id={numberPage.toString()}
                            onClick={this.handleClick}>
                        {numberPage}</button>
                </li>
            );
        });

        return (
            <div>
                <div className={'container-posts'}>
                    <ul>
                        {renderPosts}
                    </ul>
                </div>
                <div className={'pagination'}>
                    <ul id="page-numbers">
                        <li>
                            <button onClick={() => {
                                this.setState((prev) => {
                                    return {
                                        currentPage: prev.currentPage - 1
                                    }
                                })
                            }}><FontAwesomeIcon icon={faChevronLeft}/>
                            </button>
                        </li>
                        {renderPageNumbers}
                        <li>
                            <button onClick={() => {
                                this.setState((next) => {
                                    return {
                                        currentPage: next.currentPage + 1
                                    }
                                })
                            }}><FontAwesomeIcon icon={faChevronRight}/>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({posts}: any) => {

    return {
        postsData: posts,
    };
}
const mapDispatchToProps = (dispatch: any) => ({
    fetchedPost: bindActionCreators(fetchPosts(), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);