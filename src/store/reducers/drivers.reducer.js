import { LOAD_DRIVERS, DELETE_DRIVER, FILTER_BY_DRIVER, ADD_TASK, REMOVE_TASK } from '../actionTypes';

export default (state= {}, action) => {
    switch(action.type){
        case LOAD_DRIVERS:
            return { 
                ...state, 
                drivers: action.drivers.map((driver)=>{driver.tasks = 0; return driver}),
                filter:{name: '', age:  ''}
            };
        case DELETE_DRIVER:
            return {
                ...state, 
                drivers: state.drivers.filter((driver)=> driver._id != action.driverId)
            };
        case FILTER_BY_DRIVER:
            return {
                ...state, 
                filter: { ...state.filter,
                    [action.param]: action.value}
            };
        case ADD_TASK:
            return{
                ...state,
                drivers: state.drivers.map((driver)=>{
                    if(driver._id==action.driverId)
                        driver.tasks += 1;
                    return driver
                })
            };
        case REMOVE_TASK:
            return{
                ...state,
                drivers: state.drivers.map((driver)=>{
                    if(driver._id==action.driverId)
                        driver.tasks -= 1;
                    return driver
                })
            };
        default:
            return state; 
    }
}