
import React from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import loadable from './utils/loadable';
import 'animate.css'
import './style/App.scss'
import './style/base.scss'
const Login = loadable(()=> import('./views/Login'))
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
        </Switch>
    </Router>
  );
}

export default App;
