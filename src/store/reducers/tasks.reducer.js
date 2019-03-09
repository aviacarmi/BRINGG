import { LOAD_TASKS, ASSIGN_TASK, DISPLAY_TASK } from '../actionTypes';

export default (state= [], action) => {
    switch(action.type){
        case LOAD_TASKS:
            return action.tasks;
        case ASSIGN_TASK:
            return state.map((task)=>{
                if(task._id==action.taskId)
                    task.driverId =action.driverId
                return task
            });
            case DISPLAY_TASK:
            return state.map((task)=>{
                if(task._id==action.taskId)
                    task.display =action.display
                return task
            });
        default:
            return state;
            
    }
}