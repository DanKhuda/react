import {
    FETCH_SEARCH_IMAGES_START,
    FETCH_SEARCH_IMAGES_SUCCESS,
    FETCH_SEARCH_IMAGES_FAILURE
} from "../actionTypes";

import {
    apiSearchImagesUrl
} from '../api';

export const searchImagesFetchStart = start => {
    return {
        type: FETCH_SEARCH_IMAGES_START,
        isLoading: start
    };
};

export const searchImagesFetchFailed = error => {
    return {
        type: FETCH_SEARCH_IMAGES_FAILURE,
        error
    }
};

export const searchImagesFetchSuccess = searchImages => {
    return {
        type: FETCH_SEARCH_IMAGES_SUCCESS,
        searchImages
    }
};

export const fetchSearchImages = (query) => {
    const userId = '24b892b15e1d6bdefacce0a40024ac9f02dc98242074a8cf88f1e2305c143762';
    const url = `${apiSearchImagesUrl}?query=${query}&client_id=${userId}`;
    return dispatch => {
        dispatch(searchImagesFetchStart(true));
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(searchImagesFetchStart(false));
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(searchImagesFetchSuccess(items)))
            .catch(() => dispatch(searchImagesFetchFailed(true)))
    };
};