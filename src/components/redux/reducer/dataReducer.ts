export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';


const initialState ={
    posts: [],
    fetchedPosts:[],
    post: [],
    commnets: [],
    photos: [],
    fetchedPhotos: []
};

export const postReducer =(state = initialState, action:any) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload}
        case FETCH_POST:
            return {...state, fetchedPost: action.payload}
        case FETCH_COMMENTS:
            return {...state, fetchedComments: action.payload}
    }
    return state
};

export const photoReducer =(state = initialState, action:any) => {
    switch (action.type) {
        case FETCH_PHOTOS:
            return {...state, fetchedPhotos: action.payload}
    }
    return state
};


