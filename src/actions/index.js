import {
    FETCH_SEARCH_IMAGES_START,
    FETCH_SEARCH_IMAGES_SUCCESS,
    FETCH_SEARCH_IMAGES_FAILURE,
    FETCH_IMAGE_BY_ID_START,
    FETCH_IMAGE_BY_ID_SUCCESS,
    FETCH_IMAGE_BY_ID_FAILURE,
    FETCH_LOAD_IMAGES_START,
    FETCH_LOAD_IMAGES_FAILURE,
    FETCH_LOAD_IMAGES_SUCCESS,
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_FAILURE,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTION_BY_ID_START,
    FETCH_COLLECTION_BY_ID_FAILURE, FETCH_COLLECTION_BY_ID_SUCCESS
} from "../actionTypes";

import {
    apiSearchImagesUrl,
    apiImageByIdUrl, apiCollectionsUrl
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

export const fetchSearchImages = (query, page) => {
    const userId = '24b892b15e1d6bdefacce0a40024ac9f02dc98242074a8cf88f1e2305c143762';
    const url = `${apiSearchImagesUrl}?query=${query}&page=${page}&client_id=${userId}`;
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

export const loadImagesFetchStart = start => {
    return {
        type: FETCH_LOAD_IMAGES_START,
        isLoading: start
    };
};

export const loadImagesFetchFailed = error => {
    return {
        type: FETCH_LOAD_IMAGES_FAILURE,
        error
    }
};

export const loadImagesFetchSuccess = loadImages => {
    return {
        type: FETCH_LOAD_IMAGES_SUCCESS,
        loadImages
    }
};

export const fetchLoadImages = (query, page) => {
    const userId = '24b892b15e1d6bdefacce0a40024ac9f02dc98242074a8cf88f1e2305c143762';
    const url = `${apiSearchImagesUrl}?query=${query}&page=${page}&client_id=${userId}`;
    return dispatch => {
        dispatch(loadImagesFetchStart(true));
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(loadImagesFetchStart(false));
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(loadImagesFetchSuccess(items)))
            .catch(() => dispatch(loadImagesFetchFailed(true)))
    };
};

export const imageFetchStart = start => {
    return {
        type: FETCH_IMAGE_BY_ID_START,
        isLoading: start
    };
};

export const imageFetchFailed = error => {
    return {
        type: FETCH_IMAGE_BY_ID_FAILURE,
        error
    }
};

export const imageFetchSuccess = image => {
    return {
        type: FETCH_IMAGE_BY_ID_SUCCESS,
        image
    }
};

export const fetchImageById = (id) => {
    const userId = '24b892b15e1d6bdefacce0a40024ac9f02dc98242074a8cf88f1e2305c143762';
    const url = `${apiImageByIdUrl}${id}/?client_id=${userId}`;
    return dispatch => {
        dispatch(imageFetchStart(true));
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(imageFetchStart(false));
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(imageFetchSuccess(items)))
            .catch(() => dispatch(imageFetchFailed(true)))
    };
};

export const collectionsFetchStart = start => {
    return {
        type: FETCH_COLLECTIONS_START,
        isLoading: start
    };
};

export const collectionsFetchFailed = error => {
    return {
        type: FETCH_COLLECTIONS_FAILURE,
        error
    }
};

export const collectionsFetchSuccess = collections => {
    return {
        type: FETCH_COLLECTIONS_SUCCESS,
        collections
    }
};

export const fetchCollections = () => {
    const userId = '24b892b15e1d6bdefacce0a40024ac9f02dc98242074a8cf88f1e2305c143762';
    const url = `${apiCollectionsUrl}?client_id=${userId}`;
    return dispatch => {
        dispatch(collectionsFetchStart(true));
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(collectionsFetchStart(false));
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(collectionsFetchSuccess(items)))
            .catch(() => dispatch(collectionsFetchFailed(true)))
    };
};



export const collectionFetchStart = start => {
    return {
        type: FETCH_COLLECTION_BY_ID_START,
        isLoading: start
    };
};

export const collectionFetchFailed = error => {
    return {
        type: FETCH_COLLECTION_BY_ID_FAILURE,
        error
    }
};

export const collectionFetchSuccess = collection => {
    return {
        type: FETCH_COLLECTION_BY_ID_SUCCESS,
        collection
    }
};

export const fetchCollectionById = (id) => {
    const userId = '24b892b15e1d6bdefacce0a40024ac9f02dc98242074a8cf88f1e2305c143762';
    const url = `${apiCollectionsUrl}${id}/?client_id=${userId}`;
    return dispatch => {
        dispatch(collectionFetchStart(true));
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(collectionFetchStart(false));
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(collectionFetchSuccess(items)))
            .catch(() => dispatch(collectionFetchFailed(true)))
    };
};