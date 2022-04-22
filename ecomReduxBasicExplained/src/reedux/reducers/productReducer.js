import { ActionTypes } from '../constants/action-type';

const initialState = {
    products: [],
    Loader: true
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOADER_HANDLER:
            return {
                ...state,
                Loader: payload,
            };
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload,
            };
        default:
            return state;
    }
};

export const selectProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };

        default:
            return state;
    }
};