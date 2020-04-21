import React from "react";
import { useSelector} from "react-redux";

interface State {
    posts: any
}

export const ElementRecentPost: React.FC = () => {
    const posts = useSelector((state: State) => state.posts.fetchedPosts);

    return <div className={'container-recentpost'}><h2>RECENT POST</h2>
        <ul>{posts.slice(0, 4).map((post: any) => <li className={'item-recent-post'} key={post.id}>
            <p>INSPIRATION</p>
            <h3><a href={'post/Post'}>{post.title}</a></h3>
        </li>)}</ul>
    </div>
};