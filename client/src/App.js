import React, { Component } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log("this is res", res);
        this.setState({
          data: res.data
        })
        console.log(this.state.data)
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Working!</h1>
      </div>
    );
  }
}

export default App;
