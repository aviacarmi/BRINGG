import React from 'react';
import PropTypes from "prop-types";
import './filters.scss';

const Filter = ({placeholder, onChange}) => {
    return(
        <input className="filter" type="text" placeholder={placeholder} onChange={(e)=>{onChange(e.target.value)}}/>
    )
}

Filter.propTypes = {
    placeholder: PropTypes.string, 
    onChange: PropTypes.func
};

Filter.defaultProps = {
    placeholder: "filter by...", 
    onChange: ()=>{}
};


export default Filter;