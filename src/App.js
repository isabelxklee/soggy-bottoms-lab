import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CakeContainer from './components/CakeContainer'
import CakeDisplay from './components/CakeDisplay'

class App extends Component {
  state = {
    cakeList: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/cakes")
    .then(r => r.json())
    .then((cakesArr) => {
      this.setState({
        cakeList: cakesArr
      })
    })
  }
  
  render() {
    return (
      <div id="App">
        <CakeContainer cakes = { this.state.cakeList } />
      </div>
    );
  }
}

export default App