import { LOAD_TASKS, ASSIGN_TASK, DISPLAY_TASK } from '../actionTypes';
import{ getTasks } from '../../services/tasks.service';
import {addTaskToDriver, removeTaskFromDriver} from './drivers.actions';

export function loadTasks(){
    return (dispatch) => {
        return getTasks()
        .then((tasks) => {
            dispatch({
                type: LOAD_TASKS,
                tasks
            })
        })
    }
}

export function assignTask(taskId, driverId, previousDriver){
    return dispatch => {
        if(driverId != ''){
            dispatch(addTaskToDriver(driverId));
        }

        if(previousDriver != ''){
            dispatch(removeTaskFromDriver(previousDriver));
        }

        dispatch({
            type: ASSIGN_TASK,
            taskId,
            driverId,
            previousDriver  
        })
    }   
}

export function displayTask(taskId, display){
    return dispatch => {
        dispatch({
            type: DISPLAY_TASK,
            taskId,
            display
        })
    }   
}