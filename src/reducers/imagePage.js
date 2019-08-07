import {
    FETCH_IMAGE_BY_ID_SUCCESS
} from '../actionTypes'

const initialState = {
    image: {}
};

export default (state = initialState, {type, image}) => {
    switch (type) {
        case FETCH_IMAGE_BY_ID_SUCCESS:
            return {...state, image};
        default:
            return state;
    }
}