import React from 'react';
import PropTypes from "prop-types";
import Driver from './driver/driver.component';
import Filters from './driver/filters/filters.component';
import {convertStringToLatLng} from '../../helper';
import './driversList.scss';

const DriversList = ({drivers, handleFilterChange, onDelete, onLocate}) => {
   return( 
   <div className="drivers-list">
        <div className="drivers-list-filters">
            <Filters handleFilterChange={handleFilterChange}/>
        </div>
        <div className="drivers-list-data">
        {
            drivers.map((driver) => {
                return (<div className="driver-wrapper" key={driver._id}>
                    <Driver driver = {driver} 
                            onDelete={()=> onDelete(driver._id)} 
                            onLocate={()=> onLocate(convertStringToLatLng(driver.location))}/>
                </div>)
            })
        }
        </div>
    </div>
    )
}

DriversList.propTypes = {
    drivers: PropTypes.array, 
    handleFilterChange: PropTypes.func, 
    onDelete: PropTypes.func, 
    onLocate: PropTypes.func
};

DriversList.defaultProps = {
    drivers: [], 
    handleFilterChange: ()=>{}, 
    onDelete: ()=>{}, 
    onLocate: ()=>{}
};

export default DriversList;