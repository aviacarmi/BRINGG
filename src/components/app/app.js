import React, { Component } from 'react';
import Map from '../map/map.container';
import DriversList from '../driversList/driversList.container';
import TasksList from '../tasksList/tasksList.container';
import './app.scss';

class App extends Component {
  render() {
    return (
          <div className="app">
            <div className="top-screen">
              <DriversList />
              <Map />
            </div>
            <TasksList/>
          </div>
    );
  }
}

export default App;