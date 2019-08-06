import {
    FETCH_SEARCH_IMAGES_SUCCESS
} from '../actionTypes'

const initialState = {
    searchImages: []
};

export default (state = initialState, {type, searchImages}) => {
    switch (type) {
        case FETCH_SEARCH_IMAGES_SUCCESS:
            return {...state, searchImages: [
                    ...searchImages.results
                ]};
        default:
            return state;
    }
}