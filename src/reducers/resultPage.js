import {
    FETCH_IMAGES_SUCCESS, FETCH_SEARCH_IMAGES_SUCCESS
} from '../actionTypes'

const initialState = {
    images: [],
    searchImages: []
};

export default (state = initialState, {type, images, searchImages}) => {
    switch (type) {
        case FETCH_IMAGES_SUCCESS:
            return Object.assign({}, state, {
                images: [
                    ...images
                ]
            });
        case FETCH_SEARCH_IMAGES_SUCCESS:
            return Object.assign({}, state, {
                searchImages: [
                    ...searchImages.results
                ]
            });
        default:
            return state;
    }
}