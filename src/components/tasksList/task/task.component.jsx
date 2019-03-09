import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DriverSelector from './driverSelector/driverSelector.container';
import ToggleTask from './toggleTask/toggleTask.container';

const Task = ({task}) => {
  return(
    <TableRow key={task._id}>
        <TableCell component="th" scope="row">{task.title}</TableCell>
        <TableCell align="right">{task.scheduled_at}</TableCell>
        <TableCell align="right">{<DriverSelector taskId={task._id} driverId={task.driverId}/>}</TableCell>
        <TableCell align="right">{task.address}</TableCell>
        <TableCell align="right">{task.location.latitude}</TableCell>
        <TableCell align="right">{task.location.longitude}</TableCell>
        <TableCell align="right"><ToggleTask taskId={task._id} display={task.display}/></TableCell>
    </TableRow>
    )
}

Task.propTypes = {
  task: PropTypes.object
};

Task.defaultProps = {
  task:{}
};

export default Task;
