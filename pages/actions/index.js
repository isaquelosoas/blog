import { NAV_UPDATE_VALUE } from '../actions/actionTypes';
export const navUpdate = value => {
    console.log(value)
    return ({
    type: NAV_UPDATE_VALUE,
    value: value})
};