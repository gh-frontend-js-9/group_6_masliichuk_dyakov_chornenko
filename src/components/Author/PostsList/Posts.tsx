import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../redux/action/action";

interface State {
    posts: any,
    numberPost: number
}

const ElementPostData = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: State) => state.posts.fetchedPosts);
    const numberPost = posts.length;
    console.log(numberPost);
    if (!posts.length) {
        dispatch(fetchPosts());
    }
    return posts.slice(0, 3).map((post: any) => <div className={'item-news'}>
        <div>
            <img
                src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
                alt={'ITstep'}/>
        </div>
        <p className={'author-post'}>
            <span className={'author-post-style'}>BY </span>  TOMAS LAURINAVICIUS   <span className={'author-post-style'}>IN  </span> RESOURCE
        </p>
        <h3 className={'post-item-title'}>
            <a href={'post/Post'} key={post.id}>{post.title}</a>
        </h3>
    </div>)
};
export default ElementPostData;