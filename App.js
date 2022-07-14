import React from 'react'
import './App.css';
import { Switch } from 'react-router-dom';
import ListUser from './components/ListUser';
import UpdateUser from './components/UpdateUser';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AddUser from './components/AddUser';
import Introduction from './components/introduction';
import Feedback from './components/Ratting';
import Header from './Header';

const App = () => {

  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route exact path={'/'} component={Introduction} />
        <Route exact path={'/createuser'} component={AddUser } />
        <Route exact path={`/studentsList`} component={ListUser } />
        <Route exact path={`/update/:id`} component={UpdateUser } />
        <Route exact path={`/feedback`} component={Feedback} />
        </Switch>
      </Router>

    </div>
  )
}

export default App;
