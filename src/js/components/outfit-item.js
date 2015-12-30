import React, { PropTypes } from 'react'

class OutfitItem extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      outfitAccessories: null
    }
  }

  componentDidMount() {
    let outfit = this.props.outfit
    if(!outfit.accessories.img){
      return
    } else {
    this.setState({
      outfitAccessories: outfit.accessories.img
    })
   }
  }

  render () {
    console.log(this.props)
    let outfit = this.props.outfit
    return(
      <div className="outfitDisplay">
          <h2>{outfit.outfitName}</h2>
          <img className="top" src={outfit.top.img}/>
          <img className="bottom" src={outfit.bottom.img}/>
          <img className="shoes" src={outfit.shoes.img}/>
          <img className="accessory" src={this.state.outfitAccessories}/>
      </div>
    )
  }

}

export default OutfitItem;
