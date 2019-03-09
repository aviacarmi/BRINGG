import { LOAD_DRIVERS, DELETE_DRIVER, FILTER_BY_DRIVER, ADD_TASK, REMOVE_TASK } from '../actionTypes';
import{ getDrivers } from '../../services/drivers.service';

export function loadDrivers(){
    return (dispatch) => {
        return getDrivers()
        .then((drivers) =>{
            dispatch({
                type: LOAD_DRIVERS,
                drivers
            })
        })
    }   
}

export function deleteDriver(driverId){
    return dispatch => {
        dispatch({
            type: DELETE_DRIVER,
            driverId
        })
    }   
}

export function filterByDriver(param, value){
    return dispatch => {
        dispatch({
            type: FILTER_BY_DRIVER,
            param,
            value
        })
    }   
}

export function addTaskToDriver(driverId){
    return dispatch => {
        dispatch({
            type: ADD_TASK,
            driverId
        })
    }   
}

export function removeTaskFromDriver(driverId){
    return dispatch => {
        dispatch({
            type: REMOVE_TASK,
            driverId
        })
    }   
}