import {
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_IMAGE_BY_ID_SUCCESS
} from '../actionTypes'

const initialState = {
    collections: []
};

export default (state = initialState, {type, collections}) => {
    switch (type) {
        case FETCH_COLLECTIONS_SUCCESS:
            return {...state, collections: [
                    ...collections
                ]};
        default:
            return state;
    }
}