import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Device from './components/devices'
import Login from './components/login'
import DeviceGroup from './components/deviceGroups'
function App() {
  return (
    <Router>
      <div className="head">
        <div className="logo">
          <img src="https://zctse.esper.cloud/static/media/shoonya-logo-white.84769a53.svg" alt="" />
        </div>
        <div className="menuItesms">
          <ul>
            <li> <Link to="/Device">Devices</Link></li>
            <li> <Link to="/DeviceGroup">Groups</Link> </li>
          </ul>
          <div className="userProfile">
            <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" alt="" />
            <div className="userDetails">
              <div className="row">
                <div className="col-12 btm-brd pb-3">
                  lalith889@gmail.com
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="innerContent">
        <Route exact path="/" component={Login} />
        <Route path="/Device" component={Device} />
        <Route path="/DeviceGroup" component={DeviceGroup} />
      </div>
      {/* <div>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/Device">Users</Link>
              </li>
              <li>
                <Link to="/DeviceGroup">Contact</Link>
              </li>
            </ul>
            <Route exact path="/" component={Login} />
            <Route path="/Device" component={Device} />
            <Route path="/DeviceGroup" component={DeviceGroup} />
          </div> */}
    </Router>
  );
}

export default App;


