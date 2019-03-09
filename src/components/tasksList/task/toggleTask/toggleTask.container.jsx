import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToggleButton from 'react-toggle-button'
import {displayTask} from '../../../../store/actions/tasks.actions';

class ToggleTask extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
        <ToggleButton inactiveLabel={"show"}
                      activeLabel={"hide"}
                      value={this.props.display}
                      onToggle={(value) => {
                        this.props.changeDisplay(this.props.taskId, !value) 
                      }} />
    );
  }
}

ToggleTask.defaultProps = {
   display: true
  };
  
const mapDispatchToProps = dispatch => {
  return {
    changeDisplay:(taskId, display) => {
        dispatch(displayTask(taskId, display))
      }
  }
}

const mapStateToProps = (store) => {
  return {
  }};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTask);
