import {combineReducers} from "redux";
import {photoReducer, postReducer} from "./dataReducer";

export const rootReducer = combineReducers({
    posts: postReducer,
    post: postReducer,
    comments: postReducer,
    photos: photoReducer
});

