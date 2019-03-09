import React, { Component } from 'react';
import {loadTasks} from '../../store/actions/tasks.actions';
import {loadDrivers} from '../../store/actions/drivers.actions';
import { connect } from 'react-redux';
import { ReactBingmaps } from 'react-bingmaps';
import {DRIVER_ICON, LOCATION_ICON, API_KEY} from '../../consts';
import {convertStringToLatLng, getDriverName, filterDrivers, filterTasks} from '../../helper';
import './map.scss';

class MapContainer extends Component {
constructor(props){
  super(props);
  this.state={
    drivers:[],
    tasks:[]
  }
}

componentWillReceiveProps(nextProps){
  let filteredDrivers = filterDrivers(nextProps.drivers, nextProps.filter);
  let filteredTasks = filterTasks(nextProps.tasks, filteredDrivers, nextProps.filter);
  this.setState({
    drivers: this.PrepareDriversToDisplay(filteredDrivers),
    tasks: this.PrepareTasksToDisplay(filteredTasks)
  })
}

  PrepareDriversToDisplay = (drivers)=>{
    return drivers.map((driver)=>{
      return{
        location: convertStringToLatLng(driver.location),
        option:{
              title: getDriverName(driver.name),
              icon: DRIVER_ICON
            }
        }
    })
  }

  PrepareTasksToDisplay= (tasks)=>{
    return tasks.filter((task)=>task.display != false).map((task)=>{
     return{
          location: convertStringToLatLng(task.location),
          option:{
                title: task.title,
                icon: LOCATION_ICON
              }
          }
    })
  }
 
  render() {
    return (
          <div className='map'>
            <ReactBingmaps
              bingmapKey = {API_KEY} 
              center = {this.props.currLocation}
              pushPins = {this.state.drivers.concat(this.state.tasks)}/>
          </div>
    );
  }
}

MapContainer.defaultProps = {
  tasks:[],
  drivers:[],
  filter: {name:'',age:''}
};

const mapDispatchToProps = dispatch => {
  return {
    loadAllDrivers:() => {
      dispatch(loadDrivers())
    },
    loadAllTasks:() => {
      dispatch(loadTasks())
    }
  }
}

const mapStateToProps = (store) => {
  return {
    tasks: store.tasks,
    drivers: store.drivers.drivers,
    filter: store.drivers.filter,
    currLocation: store.map.currLocation
  }};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
