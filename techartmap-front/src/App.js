import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EnterPage from './pages/enterPage/components/enterPage'
import MainPage from './pages/mainPage/components/mainPage'
import * as serviceWorker from './serviceWorker';
import RegistrationPage from "./pages/registrationPage/components/registrarionPage"

import AdminPage from "./pages/adminPage/components/adminPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddCityPage from './pages/addCityPage/components/addCityPage';
import AddCinemaPage from './pages/AddCinemaPage/components/addCinemaPage';
function App() {
  return (
    <Router>
      <Route path="/" exact component={MainPage} />
      <Route path="/registration" component={props => <RegistrationPage{...props} />} />
      <Route path="/enter" component={props => <EnterPage{...props} />} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/add-city-page" component={AddCityPage} />
      <Route path="/add-cinema-page" component={AddCinemaPage} />
    </Router>
  );
}

export default App;
