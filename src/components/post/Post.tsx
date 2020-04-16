import React from "react";
import post_image from './../../assets/images/post/nature.jpg';
import post_team from './../../assets/images/post/team.png';

interface IProps {}

interface IState {
   
}

export default class Post extends React.Component<IProps, IState> {

    render() {
        return (
            <div>
                <article className="post">
                    <div className="container">
                        <div className="post__heading" >
                            <h1>10 Reasons to Build Your Website with WP Page Builder</h1>
                            <h3>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers).</h3>
                            <address className="post__address"><span>BY</span> TOMAS LAURINAVICIUS <span>IN</span> DESIGN PROCESS</address>
                        </div>
                    </div>

                    <div className="post__content" >
                        <div className="container">

                            <ul className="post__breadcrumps" >
                                <li><a href="#">Home</a> — </li>
                                <li><a href="#">Reading lists</a> — </li>
                                <li><a href="#">UX Design</a> — </li>
                                <li><a href="#">10 Reasons to Build Your Website with WP Page Builder</a></li>
                            </ul>


                            <div className="row" >
                                <div className="socials col-md-1" >
                                    <div className="socials__item">
                                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    </div>

                                    <div className="socials__item">
                                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    </div>

                                    <div className="socials__item">
                                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    </div>

                                    <div className="socials__item">
                                        <a href=""><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <div className="col-md-10" >
                                    <img className="post__image" src={post_image} alt="post_image" />
                                    <p className="post__text">People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one,<a href="#"> WP Page Builder</a> . If you’re tired of the same old page builder plugins, this is one you should try out.</p>
                                    <h2>What’s Special About WP Page Builder?</h2>
                                    <p>Wondering what makes WP Page Builder so special? I would say, what doesn’t? It’s developed by the team over at Themeum, who has been creating <a href="#">WordPress themes </a> since 2013. As mentioned above, the plugin is a full pack of essential site building elements with all modern the modern functionality you’ve come to expect from a page builder plugin. Let’s have a look below at all of the juicy features WP Page Builder includes.</p>
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
                                        <div className="post__follow">Follow me <a href="#">@JohnAMWill.</a></div>
                                    </div>
                                </div>

                                <div className="social-actions col-md-1" >
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
                                        <a href="#" className="related-posts__more">More</a>
                                    </div>
                                </div>

                                <div className="row">
                                    
                                    <div className="col-md-6">
                                        <div className="related-posts__block">
                                            <img className="related-posts__image" src={post_image} alt="related-posts_image" />
                                            <address className="related-posts__address"><span>BY</span> TOMAS LAURINAVICIUS <span>IN</span> DESIGN PROCESS</address>
                                            <h3 className="related-posts__title">Web page layout 101: website anatomy every designer needs to learn</h3>
                                            <p className="related-posts__description">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="related-posts__block last">
                                        <img className="related-posts__image" src={post_image} alt="related-posts_image" />
                                            <address className="related-posts__address"><span>BY</span> TOMAS LAURINAVICIUS <span>IN</span> DESIGN PROCESS</address>
                                            <h3 className="related-posts__title">Web page layout 101: website anatomy every designer needs to learn</h3>
                                            <p className="related-posts__description">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
                                        </div>
                                        
                                    </div>
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
                                

                            </div>
                        </div>


                    </div>

                </article>
            </div>
        )
    }
}