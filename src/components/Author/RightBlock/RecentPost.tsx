import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../redux/action/action";

interface State {
    posts: any
}

export const ElementRecentPost: React.FC = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: State) => state.posts.fetchedPosts);

    if (!posts.length) {
        dispatch(fetchPosts());
    }
    return <div className={'container-recentpost'}><h2>RECENT POST</h2>
        <ul>{posts.slice(0, 4).map((post: any) => <li className={'item-recent-post'}>
            <p>INSPIRATION</p>
            <h3><a href={'post/Post'} key={post.id}>{post.title}</a></h3>
        </li>)}</ul>
    </div>
};