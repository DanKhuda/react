import {
    FETCH_IMAGES_START,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE,
    FETCH_SEARCH_IMAGES_START,
    FETCH_SEARCH_IMAGES_SUCCESS,
    FETCH_SEARCH_IMAGES_FAILURE
} from "../actionTypes";

import {
    apiImagesUrl, apiSearchImagesUrl
} from '../api';

export const imagesFetchStart = start => {
    return {
        type: FETCH_IMAGES_START,
        isLoading: start
    };
};

export const imagesFetchFailed = error => {
    return {
        type: FETCH_IMAGES_FAILURE,
        error
    }
};

export const imagesFetchSuccess = images => {
    return {
        type: FETCH_IMAGES_SUCCESS,
        images
    }
};

export const fetchImages = () => {
    const url = apiImagesUrl;
    return dispatch => {
        dispatch(imagesFetchStart(true));
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(imagesFetchStart(false));
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(imagesFetchSuccess(items)))
            .catch(() => dispatch(imagesFetchFailed(true)))
    };
};

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
    const url = apiSearchImagesUrl + query + '&client_id=24b892b15e1d6bdefacce0a40024ac9f02dc98242074a8cf88f1e2305c143762';
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