import { ADD_ITEM } from './constants';


const INITIAL_STATE = []


export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state,
            action.item]
        default:
            return state;
    }
}

