import React from "react";
import Post from "./Post";
import { useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/action/action";


interface State {
    posts: any
}

const ElementPostData = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: State) => state.posts.fetchedPosts);

    if (!posts.length) {
        dispatch(fetchPosts());
    }
    return posts.map((post: any)=> <Post post = {post} key={post.id}/>)
};
export default ElementPostData;