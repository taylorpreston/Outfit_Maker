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
    console.log(objId)
    $.ajax({
      url: `https://api.parse.com/1/classes/Outfit/${objId}`,
      type: 'DELETE',
    })
    this.props.handleOutfitChange()
  }

  render () {
    let outfit = this.props.outfit;

  if(outfit.accessories) {
    return <div className="outfitDisplay">
            <h2>{outfit.outfitName}</h2>
              <div className="outfitPic">
                <img className="top article" src={outfit.top.img}/>
              </div>
              <div className="outfitPic">
                <img className="bottom article" src={outfit.bottom.img}/>
              </div>
              <div className="outfitPic">
                <img className="shoes article" src={outfit.shoes.img}/>
              </div>
              <div className="outfitPic">
                <img className="accessory article" src={outfit.accessories.img}/>
              </div>
              <button className="delete" value='del' onClick={this.deleteOutfit}/>
           </div>
  }
    return(
      <div className="outfitDisplay">
          <h2>{outfit.outfitName}</h2>
          <div className="outfitPic">
            <img className="top article" src={outfit.top.img}/>
          </div>
          <div className="outfitPic">
            <img className="bottom article" src={outfit.bottom.img}/>
          </div>
          <div className="outfitPic">
            <img className="shoes article" src={outfit.shoes.img}/>
          </div>
            <button className="delete" value='del' onClick={this.deleteOutfit}/>
      </div>
    )
  }

}

export default OutfitItem;
