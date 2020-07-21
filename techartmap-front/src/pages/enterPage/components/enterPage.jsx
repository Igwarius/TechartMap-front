import React from 'react'
import Header from '../../../components/header'
import axios from 'axios'
import './enterPage.css'
import urls from '../../../static/urls'
import constants from '../../../static/constants'
import jwt_decode from 'jwt-decode'
class EnterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: '', password: '', wrongAuth: false };
  }

  onLoginChange = (event) => {
    this.setState({ login: event.target.value });
  }
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = async () => {
    let response;
    await axios.post(urls.CHECK_USER, { login: this.state.login, password: this.state.password }).then(responsee => {
      response = responsee; if (response.status === 200) {
        localStorage.setItem('RefreshToken', response.data.refreshToken)
        localStorage.setItem('Token', response.data.token)
        let decode = jwt_decode(localStorage.getItem('Token'))
        if (decode[constants.TOKEN_PARAM + 'role'] === "User")
          this.props.history.push("/main")
        if (decode[constants.TOKEN_PARAM + 'role'] === "Admin")
          this.props.history.push("/admin")
      }
    }).catch(a => { this.setState({ wrongAuth: true }) });
  }

  render() {
    return (
      <>
        <Header />
        <div className="global-cont">
          <div className="container">
            <h1>Вход</h1>
            <input placeholder="Логин" type="text" value={this.state.login} onChange={this.onLoginChange} />
            {(this.state.login.length < 3) ? <div
              className="alert alert-danger"> Логин должен быть не менее 3 символов</div> : null}
            <input placeholder="Пароль" type="password" value={this.state.password} onChange={this.onPasswordChange} />
            {(this.state.password.length < 8) ? <div
              className="alert alert-danger"> Пароль должен быть не менее 8 символов</div> : null}
            <input type="button" value="Вход" onClick={this.handleSubmit} />
            {(this.state.wrongAuth) ? <div
              className="alert alert-danger"> Неверный логин или пароль</div> : null}
          </div>
        </div>
      </>
    );
  }
}
export default EnterPage;