import React, { PropTypes } from 'react'
import $ from '../ajax'

class OutfitItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      outfitAccessories: null
    }
    this.deleteOutfit = this.deleteOutfit.bind(this)
    console.log(this.props);
  }

  componentDidMount() {
    let outfit = this.props.outfit
    if(!outfit.accessories.img){gulp
      return
    } else {
    this.setState({
      outfitAccessories: outfit.accessories.img
    })
   }
  }

  deleteOutfit(){
    let objId = this.props.outfit.objectId
    console.log(objId)
    $.ajax({
      url: `https://api.parse.com/1/classes/Outfit/${objId}`,
      type: 'DELETE',
    })
    this.forceUpdate()
  }

  render () {
    let outfit = this.props.outfit
    return(
      <div className="outfitDisplay">
          <h2>{outfit.outfitName}</h2>
          <img className="top" src={outfit.top.img}/>
          <img className="bottom" src={outfit.bottom.img}/>
          <img className="shoes" src={outfit.shoes.img}/>
          <img className="accessory" src={this.state.outfitAccessories}/>
          <button className="delete" value='del' onClick={this.deleteOutfit}/>
      </div>
    )
  }

}

export default OutfitItem;
