import { ADD_ITEM } from './constants';


export const addNewItem = (item) => ({
    type: ADD_ITEM,
    item
})