import React from 'react'
import Header from '../../../components/header'
import axios from 'axios';
class AdminPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
  }
  render() {
      return (
       <>
        <Header/>
          <h1>Страница администратора</h1>
            </>
      );
    }
  }
  export default AdminPage;