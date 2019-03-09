import React, { Component } from 'react';
import { connect } from 'react-redux';
import DriversList from './driversList.component';
import {filterDrivers} from '../../helper';
import { locate } from '../../store/actions/map.action';
import {loadDrivers, deleteDriver, filterByDriver} from '../../store/actions/drivers.actions';

class DriversListContainer extends Component {
  constructor(props){
    super(props);
    this.state={
        filteredDrivers: []
    }
  }

  componentDidMount(){
    this.props.loadAllDrivers();
  }

  componentWillReceiveProps(nextProps){
    this.setState({filteredDrivers: filterDrivers(nextProps.drivers, nextProps.filter)});
  }

  handleFilterChange(param,value){
    this.props.changeFilter(param,value);
  }

  render() {
    return (
        <DriversList drivers = {this.state.filteredDrivers} 
                    handleFilterChange={this.handleFilterChange.bind(this)}
                    onDelete={this.props.deleteDriverById}
                    onLocate={this.props.handleLocate}/>
    );
  }
}

DriversListContainer.defaultProps = {
    drivers:[]
};

const mapDispatchToProps = dispatch => {
  return {
    loadAllDrivers:() => {
      dispatch(loadDrivers())
    },
    deleteDriverById:(driverId) => {
        dispatch(deleteDriver(driverId))
      },
      changeFilter:(param, value) => {
        dispatch(filterByDriver(param, value))
      },
      handleLocate:(location) =>{
        dispatch(locate(location))
      }
  }
}

const mapStateToProps = (store) => {
  return {
    drivers: store.drivers.drivers, 
    filter: store.drivers.filter
  }};

export default connect(mapStateToProps, mapDispatchToProps)(DriversListContainer);
