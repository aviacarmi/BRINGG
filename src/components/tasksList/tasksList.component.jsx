import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Task from './task/task.component';
import './tasksList.scss';

const TasksList = ({tasks, classes}) => {
    return (
    <div className="tasks-list">
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">scheduled for</TableCell>
              <TableCell align="right">Assign to</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Lat</TableCell>
              <TableCell align="right">Lng</TableCell>
              <TableCell align="right">Locate on map</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map(task => (
              <Task task={task} key={task._id}/>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
    );
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

TasksList.propTypes = {
  classes: PropTypes.object.isRequired,
  tasks: PropTypes.array
};

TasksList.defaultProps = {
  classes:{root:"", table:""},
  tasks:[]
};

export default withStyles(styles)(TasksList);

