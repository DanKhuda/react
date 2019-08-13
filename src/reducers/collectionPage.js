import {
    FETCH_COLLECTION_BY_ID_SUCCESS,
    FETCH_COLLECTIONS_SUCCESS
} from '../actionTypes'

const initialState = {
    collections: [],
    collection: {}
};

export default (state = initialState, {type, collections, collection}) => {
    switch (type) {
        case FETCH_COLLECTIONS_SUCCESS:
            return {...state, collections: [
                    ...collections
                ]};
        case FETCH_COLLECTION_BY_ID_SUCCESS:
            return {...state, collection};
        default:
            return state;
    }
}