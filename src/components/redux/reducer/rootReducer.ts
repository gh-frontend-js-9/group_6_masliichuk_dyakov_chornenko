import {combineReducers} from "redux";
import {photoReducer, postPaginateReducer, postReducer} from "./dataReducer";

export const rootReducer = combineReducers({
posts: postReducer,
    photos: photoReducer,
    postsPaginate: postPaginateReducer
});

