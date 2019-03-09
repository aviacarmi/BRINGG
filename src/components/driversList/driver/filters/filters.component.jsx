import React from 'react';
import PropTypes from "prop-types";
import Filter from './filter.component';
import './filters.scss';

const Filters = ({handleFilterChange}) => {
    return(
        <div className="filters">
            Filter by name:
            <Filter placeholder="name..." onChange={(value)=>{handleFilterChange("name",value)}}/>
            Filter by age:
            <Filter placeholder="age..." onChange={(value)=>{handleFilterChange("age",value)}}/>
        </div>
    )
}

Filters.propTypes = {
    handleFilterChange: PropTypes.func
};

Filters.defaultProps = {
    handleFilterChange: ()=>{}
};

export default Filters;