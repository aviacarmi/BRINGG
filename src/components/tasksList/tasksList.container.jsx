import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {loadTasks} from '../../store/actions/tasks.actions';
import TasksList from './tasksList.component';
import {filterTasks} from '../../helper';
import './tasksList.scss';

class TasksListContainer extends Component {
  constructor(props){
    super(props);
    this.state={
        filteredTasks: []
    }
  }

  componentDidMount(){
    this.props.loadAllTasks();
  }

  componentWillReceiveProps(nextProps){
    this.setState({filteredTasks: filterTasks(nextProps.tasks, nextProps.drivers, nextProps.filter)})
  }

  render() {
    return (
      <Fragment>
        <div className="tasks-title">
          {`Tasks: (total: ${this.state.filteredTasks.length})`}
        </div>
        <TasksList tasks={this.state.filteredTasks}/>
      </Fragment>
    );
  }
}

TasksListContainer.defaultProps = {
  tasks: [],
  drivers:[],
  filter: {name:'',age:''}
};

const mapDispatchToProps = dispatch => {
  return {
    loadAllTasks:() => {
      dispatch(loadTasks())
    }
  }
}

const mapStateToProps = (store) => {
  return {
    tasks: store.tasks,
    drivers: store.drivers.drivers,
    filter: store.drivers.filter
  }};

export default connect(mapStateToProps, mapDispatchToProps)(TasksListContainer);
