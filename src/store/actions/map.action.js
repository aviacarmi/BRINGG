import { CHANGE_LOCATION } from '../actionTypes';

export function locate(currLocation){
    return dispatch => {
        dispatch({
            type: CHANGE_LOCATION,
            currLocation
        })
    }   
}