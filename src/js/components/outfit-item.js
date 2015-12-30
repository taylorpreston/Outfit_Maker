import React, { PropTypes } from 'react'

class OutfitItem extends React.Component {

  render () {
    console.log(this.props)
    let outfit = this.props.outfit

    return(
      <div className="outfitDisplay">
        <h2>{outfit.outfitName}</h2>
        <img src={outfit.top.img}/>
        <img src={outfit.bottomimg}/>
        <img src={outfit.shoes.img}/>
        <img src={outfit.accessories.img}/>
      </div>
    )
  }

}

export default OutfitItem;
