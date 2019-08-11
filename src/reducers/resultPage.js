import {
    FETCH_SEARCH_IMAGES_SUCCESS,
    FETCH_LOAD_IMAGES_SUCCESS
} from '../actionTypes'

const initialState = {
    searchImages: []
};

export default (state = initialState, {type, searchImages, loadImages}) => {
    switch (type) {
        case FETCH_SEARCH_IMAGES_SUCCESS:
            return {...state, searchImages: [
                    ...searchImages.results
                ]};
        case FETCH_LOAD_IMAGES_SUCCESS:
            return {...state, searchImages: [
                    ...state.searchImages, ...loadImages.results
                ]
            };
        default:
            return state;
    }
}