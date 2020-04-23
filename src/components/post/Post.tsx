import React from "react";
import post_image from './../../assets/images/post/nature.jpg';
import post_team from './../../assets/images/post/team.png';
import {fetchPost, fetchComments} from "../redux/action/action";
import {connect} from "react-redux";
import {withRouter} from 'react-router';
import {fakeData} from "../data/data";

class Post extends React.Component<any, any> {
    
    componentDidMount() {
        const postId = parseInt(this.props.match.params.id);
        this.props.onPostFetch(postId);
        this.props.onCommentsFetch(postId);
    }

    render() {
        if (!this.props.post) { return <div>Loading...</div>; }

        let comments = null;
        if (this.props.comments) {
            comments = (
                this.props.comments.map((comment: any, index: number) => {
                    return <div key={index} className="row comments__item">
                        <div className="col-md-2">
                            <div className="comments__avatar">
                                <img src={post_team} alt="post_team" />
                            </div>
                        </div>
                        
                        <div className="col-md-10 comments__right-block">
                            <div className="row">
                                <div className="col-12 col-md-3">
                                    <div className="comments__author">
                                    <p>{comment.name}</p>
                                    </div>
                                </div>

                                <div className="col-md-7 col-12">
                                    <div className="comments__data">
                                        <p>December 14, 2017 at 5:13 pm</p>
                                    </div>
                                </div>

                                <div className="col-12 col-md-2 comments__reply">
                                    <button type="button" className="btn-reply">Reply</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-10">
                                    <div className="comments__description">
                                        <p>{comment.body}</p>
                                    </div>
                                </div>
                            </div>
                        </div>                                              
                    </div>
                })
            );
        }

        return (
            <div>
                <article className="post">
                    <div className="container">
                        <div className="post__heading" >
                            <h1>{this.props.post.title}</h1>
                            <h3>{this.props.post.body}</h3>
                            <address className="post__address"><span>BY</span> TOMAS LAURINAVICIUS <span>IN</span> DESIGN PROCESS</address>
                        </div>
                    </div>

                    <div className="post__content" >
                        <div className="container">

                            <ul className="post__breadcrumps" >
                                <li><a href="/">Home</a> — </li>
                                <li><a href="/">Reading lists</a> — </li>
                                <li><a href="/">UX Design</a> — </li>
                                <li><a href="/">10 Reasons to Build Your Website with WP Page Builder</a></li>
                            </ul>


                            <div className="row" >
                                <div className="socials col-12 col-md-1" >
                                    <div className="socials__item">
                                        <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    </div>

                                    <div className="socials__item">
                                        <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    </div>

                                    <div className="socials__item">
                                        <a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    </div>

                                    <div className="socials__item">
                                        <a href=""><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <div className="col-md-10" >
                                    <img className="post__image" src={post_image} alt="post_image" />
                                    <p className="post__text">{this.props.post.body}</p>
                                    <h2>What’s Special About WP Page Builder?</h2>
                                    <p>{this.props.post.body}</p>
                                    <img className="post__image" src={post_image} alt="post_image" />
                                    <p className="post__text">Here are some of the amazing add-ons included:</p>
                                    <ul>
                                        <li><b>Form:</b> Create web forms effortlessly. It gives you a convenient way to style your forms as you desire. The Form add-on itself is capable of setting up any kind of form without needing to install any plugin. Moreover, you can manage form plugins and enable reCAPTCHA with just a simple click. There is also an add-on for Contact Form 7 if you prefer.</li>
                                        <li><b>Carousel: </b>It’s hard to find an advanced add-on like a carousel in a free page builder plugin, but WP Page Builder lets you create stunning hero sliders without having to pay for it.</li>
                                        <li><b>Post Grid:</b>Display blog posts in grids defining the number of posts and styling the look.</li>
                                        <li><b>Feature Box:</b> Use the Feature Box add-on to display the features of products on your website.</li>
                                        <li><b>Accordion:</b> Need any collapse text content on your site? Use WP Page Builder’s Accordion add-on and modify the style the way you want.</li>
                                    </ul>

                                    <div className="row post__images-list" >
                                        <div className="col-md-6">
                                            <div><img className="post__image" src="https://via.placeholder.com/475x574?text=Visit+Blogging.com+Now%20C/O%20https://placeholder.com/" alt="post_image" /></div>
                                        </div>

                                        <div className="col-md-6">
                                        <div><img className="post__image" src="https://via.placeholder.com/475x574?text=Visit+Blogging.com+Now%20C/O%20https://placeholder.com/" alt="post_image" /></div>
                                        </div>
                                    </div>

                                    <p className="post__testimonials">“ WP Page Builder offers a lot of ready-to-use design blocks to make your site development process a lot faster and easier “</p>

                                    <div className="post__author">
                                        <div><img src={post_team} alt="post_team" /> </div>
                                        <div className="post__person">TOMAS LAURINAVICIUS</div>
                                        <div className="post__follow">Follow me <a href="/">@JohnAMWill.</a></div>
                                    </div>
                                </div>

                                <div className="social-actions col-md-1 col-12" >
                                    <div className="social-actions__item">
                                        <a href=""><i className="fa fa-heart" aria-hidden="true"></i></a>
                                        <p>12 k</p>
                                    </div>

                                    <div className="social-actions__item">
                                        <a href=""><i className="fa fa-eye" aria-hidden="true"></i></a>
                                        <p>25 k</p>
                                    </div>
                                </div>

                                
                            </div>

                        </div>


                        <div className="container" >
                            <div className="related-posts">

                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="related-posts__name">You might also like...</p>
                                    </div>

                                    <div className="col-md-6">
                                        <a href="/" className="related-posts__more">More</a>
                                    </div>
                                </div>

                                <div className="row">
                                    
                                    {fakeData.slice(0, 2).map((post: any, index: number) =>
                                    <div key={index} className="col-md-6 related-posts__item">
                                        <div className="related-posts__block">
                                            <img className="related-posts__image" src={post_image} alt="related-posts_image" />
                                            <address className="related-posts__address"><span>BY</span> {post.author} <span>IN</span> {post.resource}</address>
                                            <a href="/" className="related-posts__title">{post.title}</a>
                                            <p className="related-posts__description">{post.body}</p>
                                        </div>
                                    </div>
                                    )}

                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="comments">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="comments__title">Comments</h3>
                                    </div>

                                    <div className="col-md-6">
                                        <button className="comments__btn">Leave a Comment</button>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <p><b>Comment policy:</b> We love comments and appreciate the time that readers spend to share ideas and give feedback. However, all comments are manually moderated and those deemed to be spam or solely promotional will be deleted.</p>
                                    </div>
                                </div>

                                {comments}

                                {/* <div className="row comments__item comments__item--reply">
                                    <div className="col-md-2 col-md-offset-2">
                                        <div className="comments__avatar">
                                            <img src={post_team} alt="post_team" />
                                        </div>
                                    </div>
                                    

                                    <div className="col-md-8 comments__right-block">
                                        <div className="row">
                                            <div className="col-md-3 col-12">
                                                <div className="comments__author">
                                                    <p>Sean Scott</p>
                                                </div>
                                            </div>

                                            <div className="col-md-7 col-12">
                                                <div className="comments__data">
                                                    <p>December 14, 2017 at 5:13 pm</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-10">
                                                <div className="comments__description">
                                                    <p>Thanks Brian! We have updated the above post. You are correct, their page builder has both a free and a premium version.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <hr/>

                                <div className="row form-comment">
                                    <div className="col-md-12">
                                        <form className="form-comment__container">
                                            <h3>Leave a Reply</h3>
                                            <div className="form-comment__group">
                                                <textarea rows={10} placeholder="Comment" required></textarea>
                                            </div>

                                            <div className="form-comment__group">
                                                <input type="text" id="name" name="name" placeholder="Name" required/>
                                            </div>

                                            <div className="form-comment__group">
                                                <input type="email" id="email" name="email" placeholder="Email" required/>
                                            </div>

                                            <div>
                                                <input id="terms" type="checkbox"/>
                                                <label htmlFor="terms" className="form-comment__terms" >I agree to the <a href="/">Terms and Conditions</a> and <a href="/">Privacy Policy</a> </label>
                                            </div>

                                            <div className="form-comment__btn">
                                                <button type="submit">Post Comment</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                

                            </div>
                        </div>


                    </div>

                </article>
            </div>
        )
    }
}


const mapStateToProps = ({post}: any) => {
    return {
        post: post.fetchedPost,
        comments: post.fetchedComments,
    };
};
const mapDispatchToProps = (dispatch: any) => ({
    onPostFetch: (id: number) => {
        dispatch(fetchPost(id));
    },
    onCommentsFetch: (id: number) => {
        dispatch(fetchComments(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post));
