import React from 'react'
import Header from '../../../components/header'
import axios from 'axios';
import urls from '../../../static/urls'
import './registrationPage.css'
import { withRouter } from "react-router";
class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: '', password: '', freelogin: true };
  }

  onLoginChange = (event) => {
    this.setState({ login: event.target.value });

  }
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = async () => {

    let response;
    await axios.post(urls.ADD_USER, { login: this.state.login, password: this.state.password }).then(responsee => { response = responsee });
    if (response.status === 200) {
      this.props.history.push("/enter")
      if (response.status !== 200) {
        this.setState({ freelogin: false })

      }
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="globalcont">
          <div className="container">
            <h1>Регистрация</h1>
            <input placeholder="Логин" type="text" value={this.state.login} onChange={this.onLoginChange} />
            {(this.state.login.length < 3) ? <div
              className="alert alert-danger"> Логин должен быть не менее 3 символов</div> : null}
            <input placeholder="Пароль" type="password" value={this.state.password} onChange={this.onPasswordChange} />
            {(this.state.password.length < 8) ? <div
              className="alert alert-danger"> Пароль должен быть не менее 8 символов</div> : null}
            <input type="button" value="Отправить" onClick={this.handleSubmit} />
            {!this.state.freelogin ? <div
              className="alert alert-danger"> Данный логин занят</div> : null}
          </div>
        </div>
      </>
    );
  }
}

export default RegistrationPage;
