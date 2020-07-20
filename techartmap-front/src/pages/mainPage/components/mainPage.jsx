import React from 'react'
import Header from '../../../components/header'
import axios from 'axios';
class MainPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
  }
  render() {
      return (
       <>
        <Header/>
          <h1>Главная страница</h1>
             </>
      );
    }
  }
  export default MainPage;