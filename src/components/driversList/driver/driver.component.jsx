import React from 'react';
import PropTypes from "prop-types";
import Buttons from './buttons/buttons.component';
import './driver.scss';

const Driver = ({driver, onDelete, onLocate}) => {
    return(
    <div className="driver">
        <img className="picture" src={driver.picture}/>
        <div className="data">
            <span className="name">
                {`${driver.name.first} ${driver.name.last}`}
            </span>
            <span className="age">
                Age: {driver.age}
            </span>
            <span className="tasks">
                Tasks: {driver.tasks ? driver.tasks : 0}
            </span>
        </div>
        <Buttons onDelete={onDelete} onLocate={onLocate}/>
    </div>
    )
}

Driver.propTypes = {
    driver: PropTypes.object, 
    onDelete: PropTypes.func, 
    onLocate: PropTypes.func
};

Driver.defaultProps = {
    driver: {}, 
    onDelete: ()=>{},
    onLocate: ()=>{}
};

export default Driver;