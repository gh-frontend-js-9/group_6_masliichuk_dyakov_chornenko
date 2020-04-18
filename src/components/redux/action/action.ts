import {FETCH_POSTS} from "../reducer/dataReducer";
import {FETCH_PHOTOS} from "../reducer/dataReducer";
import store from "../../../index";

export function fetchPosts() {
    return async (dispatch: any) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        if (!response.ok) {
            alert('Something went wrong...Maybe your problem is' + response.statusText)
        }
        const json = await response.json();
        dispatch({
            type: FETCH_POSTS,
            payload: json
        });
        console.log(store.getState)
    }


}
export function fetchPhotos() {
    return async (dispatch: any) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=3');
        const json = await response.json();
        dispatch({
            type: FETCH_PHOTOS,
            payload: json
        });
        console.log(store.getState)
    }
    }


