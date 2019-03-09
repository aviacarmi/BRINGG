import { CHANGE_LOCATION } from '../actionTypes';

export default (state= {}, action) => {
    switch(action.type){
        case CHANGE_LOCATION:
            return {
                ...state,
                currLocation: action.currLocation
            };
        default:
            return {
                currLocation:[0,0]
            };
            
    }
}