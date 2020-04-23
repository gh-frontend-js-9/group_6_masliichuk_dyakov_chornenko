import {FETCH_POSTS} from "../reducer/dataReducer";
import {FETCH_POST} from "../reducer/dataReducer";
import {FETCH_COMMENTS} from "../reducer/dataReducer";

export function fetchPosts() {
    return async (dispatch: any) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=14');
        if (!response.ok) {
            alert('Something went wrong...Maybe your problem is' + response.statusText)
        }
        const json = await response.json();
        dispatch({
            type: FETCH_POSTS,
            payload: json
        });
    }
}

export function fetchPost(id: number): any {
    return async (dispatch: any) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
            alert('Something went wrong... ' + response.statusText)
        }
        const json = await response.json();
        dispatch({
            type: FETCH_POST,
            payload: json
        });
    }
}

export function fetchComments(postId: number): any {
    return async (dispatch: any) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        if (!response.ok) {
            alert('Something went wrong... ' + response.statusText)
        }
        const json = await response.json();
        dispatch({
            type: FETCH_COMMENTS,
            payload: json
        });
    }
}
