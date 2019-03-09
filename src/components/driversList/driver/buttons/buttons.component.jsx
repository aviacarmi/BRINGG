import React from 'react';
import PropTypes from "prop-types";
import './buttons.scss';

const Buttons = ({onDelete, onLocate}) => {
    return(
        <div className="buttons">
            <button className="button delete" onClick={onDelete}>Delete</button>
            <button className="button locate" onClick={onLocate}>Locate</button>
        </div>
    )
}

Buttons.propTypes = { 
    onDelete: PropTypes.func, 
    onLocate: PropTypes.func
};

Buttons.defaultProps = {
    onDelete: ()=>{}, 
    onLocate: ()=>{}
};

export default Buttons;