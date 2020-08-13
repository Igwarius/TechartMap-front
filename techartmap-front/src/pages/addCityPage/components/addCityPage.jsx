import React from 'react'
import Header from '../../../components/header'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import urls from '../../../static/urls'
import constants from '../../../static/constants'

class AddCityPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cityName: '' };
        if (localStorage.getItem('Token')) {
            let decode = jwt_decode(localStorage.getItem('Token'))
            if (decode[constants.TOKEN_PARAM + 'role'] === "User")
                this.props.history.push("/")
        }
        else {
            this.props.history.push("/")
        }

    }
    handleSubmit = async () => {
        let response;
        await axios.post(urls.ADD_CITY, { name: this.state.cityName }).then(responsee => {
            response = responsee;
        });
    }
    onCityChange = (event) => {
        this.setState({ cityName: event.target.value });
    }
    render() {
        return (
            <>
                <Header />
                <input placeholder="введите название города" value={this.state.cityName} onChange={this.onCityChange}></input>
                <button onClick={this.handleSubmit}>добавить</button>
            </>
        );
    }
}
export default AddCityPage;