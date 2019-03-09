import { combineReducers } from 'redux';
import drivers from './drivers.reducer';
import tasks from './tasks.reducer';
import map from './map.reducer';

export default combineReducers({
    drivers,
    tasks,
    map
});