import React, { Component } from 'react';
import CakeItem from './CakeItem'

export default class CakeList extends Component {
  state = {
    details: false
  }

  showDetails = (event) => {
    this.setState({
      details: !this.state.details
    })
  }

  render() {
    let { name, category, imgURL } = this.props.cake

    return (
      <div>
          <h2 onClick={this.showDetails}>{name}</h2>
          { this.state.details
            ?
            <div>
              <p>Category: {category}</p>
              <img src={imgURL} alt={name} />
            </div>
            : null
          }
      </div>
    )
  }
}
