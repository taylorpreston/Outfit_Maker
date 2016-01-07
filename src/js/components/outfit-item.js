import React, { PropTypes } from 'react'
import $ from '../ajax'

class OutfitItem extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   outfitAccessories: null
    // }
    this.deleteOutfit = this.deleteOutfit.bind(this)
    console.log(this.props);
  }

  // componentDidMount() {
  //   let outfit = this.props.outfit
  //   if(!outfit.accessories.img){
  //     return null
  //   } else {
  //   this.setState({
  //     outfitAccessories: outfit.accessories.img
  //     })
  //   }
  // }

  deleteOutfit(){
    let objId = this.props.outfit.objectId
    $.ajax({
      url: `https://api.parse.com/1/classes/Outfit/${objId}`,
      type: 'DELETE',
    }).then( response => { this.props.handleOutfitChange()}, function(){ console.log('error');})
  }


  render () {
    let outfit = this.props.outfit;

  if(outfit.accessories) {
  return(
          <div className="outfitDisplay">
            <span className="title">{outfit.outfitName}</span>
            <div className="containOutfit">
              <img className="singleItem" src={outfit.top.img}/>
              <img className="singleItem" src={outfit.bottom.img}/>
              <img className="singleItem" src={outfit.shoes.img}/>
              <img className="singleItem" src={outfit.accessories.img}/>
            </div>
            <button className="delete" value='del' onClick={this.deleteOutfit}>Delete Outfit</button>
          </div>)
  }
    return(
      <div className="outfitDisplay">
          <span className="title">{outfit.outfitName}</span>
          <div className="containOutfit">
            <img className="singleItem" src={outfit.top.img}/>
            <img className="singleItem" src={outfit.bottom.img}/>
            <img className="singleItem" src={outfit.shoes.img}/>
          </div>
          <button className="delete" value='del' onClick={this.deleteOutfit}>Delete Outfit</button>
      </div>
    )
  }

}

export default OutfitItem;
