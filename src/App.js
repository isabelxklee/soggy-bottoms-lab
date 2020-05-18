import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CakeContainer from './components/CakeContainer'
import CakeDisplay from './components/CakeDisplay'

class App extends Component {
  state = {
    cakeList: [],
    categorySelect: ''
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
        <div className="CategorySelector">
          <label>Select a category </label>
          <select id="cakes">
            <option value="all">All cakes</option>
            <option value="firm">Firm bottomed</option>          
            <option value="soggy">Soggy bottomed</option>
          </select>
        </div>
        <CakeContainer cakes = { this.state.cakeList } />
      </div>
    );
  }
}

export default App