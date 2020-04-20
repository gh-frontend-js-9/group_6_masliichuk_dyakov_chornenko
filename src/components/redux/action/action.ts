import {FETCH_POSTS} from "../reducer/dataReducer";

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



