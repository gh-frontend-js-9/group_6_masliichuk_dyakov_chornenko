export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_PAGINATE ='FETCH_POSTS_PAGINATE';


const initialState ={
    posts: [],
    fetchedPosts:[],
    photos: [],
    fetchedPhotos: [],
    fetchedPostPaginate: []
};

export const postReducer =(state = initialState, action:any) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload}

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

export const postPaginateReducer =(state = initialState, action:any) => {
    switch (action.type) {
        case FETCH_POSTS_PAGINATE:
            return {...state, fetchedPostPaginate: action.payload}
    }
    return state
};

