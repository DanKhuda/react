import {
    FETCH_SEARCH_IMAGES_SUCCESS,
    FETCH_LOAD_IMAGES_SUCCESS, FETCH_SEARCH_IMAGES_START
} from '../actionTypes'

const initialState = {
    searchImages: []
};

export default (state = initialState, {type, searchImages, loadImages, isLoading}) => {
    switch (type) {
        case FETCH_SEARCH_IMAGES_SUCCESS:
            return {...state, searchImages: [
                    ...searchImages.results
                ]};
        case FETCH_SEARCH_IMAGES_START:
            return {...state, isLoading};
        case FETCH_LOAD_IMAGES_SUCCESS:
            return {...state, searchImages: [
                    ...state.searchImages, ...loadImages.results
                ]
            };
        default:
            return state;
    }
}