import React, { Component } from 'react'

class CakeItem extends Component {
  render() {
    let { name, category, imgURL } = this.props.cake

    return (
      <div className="CakeItem">
        <h2>{name}</h2>
        <p>Category: {category}</p>
        <img src={imgURL} alt={name} />
      </div>
    )
  }
}

export default CakeItem