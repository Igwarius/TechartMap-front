import React from 'react'
import Header from '../../../components/header'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import urls from '../../../static/urls'
import constants from '../../../static/constants'
import './adminPage.css'
class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (localStorage.getItem('Token')) {
      let decode = jwt_decode(localStorage.getItem('Token'))
      if (decode[constants.TOKEN_PARAM + 'role'] === "User")
        this.props.history.push("/main")
    }
    else {
      this.props.history.push("/main")
    }
  }
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <h1>Страница администратора</h1>
          <h2 className="button">Добавить город</h2>
          <h2 className="button">Добавить киноеатр</h2>
          <h2 className="button">Добавить зал</h2>
        </div>
      </>
    );
  }
}
export default AdminPage;