import React from 'react'
import Header from '../../../components/header'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import urls from '../../../static/urls'
import constants from '../../../static/constants'
import Select from 'react-select'

class AddCinemaPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cityId: 0, cinemaName: '', cities: [] };
        if (localStorage.getItem('Token')) {
            let decode = jwt_decode(localStorage.getItem('Token'))
            if (decode[constants.TOKEN_PARAM + 'role'] === "User")
                this.props.history.push("/")
        }
        else {
            this.props.history.push("/")
        }
        let response;
        axios.get(urls.GET_CITIES).then(responsee => {
            response = responsee;
            const responseArray = response.data.map(element => { return { name: element.name, id: element.id } })
            this.setState({ cities: responseArray });
            console.log(this.state.cities)
            debugger
        });

    }
    handleSubmit = async () => {

        debugger
        console.log({ name: this.state.cinemaName, cityId: this.state.cityId })

        let response;
        await axios.post(urls.ADD_CINEMA, { name: this.state.cinemaName, cityId: this.state.cityId }).then(responsee => {
            response = responsee;

        });
    }
    onCinemaChange = (event) => {
        this.setState({ cinemaName: event.target.value });
    }
    onCityChange = (event) => {
        this.setState({ cityId: +event.target.value });
    }
    render() {
        return (
            <>
                <Header />
                <select value={this.state.cityId} onChange={this.onCityChange}>{this.state.cities.map(element => {
                    return (<option value={element.id} >{element.name}</option>)
                })}</select>
                <input placeholder="введите название кинотетра" value={this.state.cinemaName} onChange={this.onCinemaChange}></input>
                <button onClick={this.handleSubmit}>добавить</button>
            </>
        );
    }
}
export default AddCinemaPage;