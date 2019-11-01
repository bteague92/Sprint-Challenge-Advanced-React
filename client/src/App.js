import React, { Component, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import { PlayerCard } from "./components/playerCard";
import Navbar from "./components/navbar";
import "./App.css";


const Container = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;

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


  render() {
    return (
      <div>
        <Navbar />
        <Container>
          {this.state.data.map(f => (
            <PlayerCard className="card" name={f.name} country={f.country} searches={f.searches} />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
