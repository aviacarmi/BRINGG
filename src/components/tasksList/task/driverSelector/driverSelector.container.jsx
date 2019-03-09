import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDriverName } from '../../../../helper';
import {assignTask} from '../../../../store/actions/tasks.actions';
import './driverSelector.scss';

class DriverSelectorContainer extends Component {
  constructor(props){
    super(props);
    this.state={
        previousDriver: ''
    }
  }
    
  handleChange(e){
    this.props.assignDriverToTask(this.props.taskId, e.target.value, this.state.previousDriver);
    this.setState({previousDriver:e.target.value});
  }

  render() {
    return (
      <select className="driver-selector" 
              value={this.props.driverId ? this.props.driverId : ''}
              onChange={(e)=> {this.handleChange(e)}}>
              <option value=''>Select driver..</option>
              {
                  this.props.drivers.map((driver)=>{
                      return <option value={driver._id} key={driver._id}>{getDriverName(driver.name)}</option>
                  })
              }
      </select>
    );
  }
}

DriverSelectorContainer.defaultProps = {
    drivers:[]
};

const mapDispatchToProps = dispatch => {
  return {
    assignDriverToTask:(taskId, driverId, previousDriver) => {
        dispatch(assignTask(taskId, driverId, previousDriver))
      }
  }
}

const mapStateToProps = (store) => {
  return {
    drivers: store.drivers.drivers
  }};

export default connect(mapStateToProps, mapDispatchToProps)(DriverSelectorContainer);
