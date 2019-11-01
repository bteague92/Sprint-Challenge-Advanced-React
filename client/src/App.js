import React, { Component } from 'react';
import axios from "axios";
import { PlayerCard } from "./components/playerCard";

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
        {this.state.data.map(f => (
          <PlayerCard name={f.name} country={f.country} searches={f.searches} />
        ))}
      </div>
    );
  }
}

export default App;
