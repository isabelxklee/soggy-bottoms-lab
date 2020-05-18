import React, { Component } from 'react'
import CakeList from './CakeList'
import CakeItem from './CakeItem'
import CakeFilter from './CakeFilter'

class CakeContainer extends Component {
  render() {
    let cakesArr = this.props.cakes.map((singleCake) => {
      return <CakeList key = {singleCake.id} cake = {singleCake} />
      // <CakeItem key = {singleCake.id} cake = {singleCake} />
    }) 

    return (
      <div className="CakeContainer">
        { cakesArr }
      </div>
    )
  }
}

export default CakeContainer