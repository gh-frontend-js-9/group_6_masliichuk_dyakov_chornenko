import {combineReducers} from "redux";
import {photoReducer, postReducer} from "./dataReducer";

export const rootReducer = combineReducers({
posts: postReducer,
    photos: photoReducer
});

