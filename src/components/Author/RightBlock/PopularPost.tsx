import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../redux/action/action";

interface State {
    posts: any
}

export const ElementPopularPost: React.FC = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: State) => state.posts.fetchedPosts);

    if (!posts.length) {
        dispatch(fetchPosts());
    }
    return <div className={'container-poppost'}><h2>POPULAR POST</h2>{posts.slice(0, 3).map((post: any) => <div className={'item-popular-post'}>
        <div><img
            src={'https://besthqwallpapers.com/Uploads/23-11-2019/112658/thumb2-neon-light-background-neon-lasers-bright-purple-background-neon-backgrounds.jpg'}
            alt={'ITstep'}/>
        </div>
        <div className={'title-poppost'}>
                <p>FREELANCING</p>
            <h3><a href={'post/Post'} key={post.id}>{post.title}</a></h3>
        </div>
    </div>)}</div>
};