import React from 'react'
import OutfitItem from './outfit-item'
import $ from 'jquery'

class Outfits extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props.userSession)
    this.state = {
      userOutfits:[]
    }
    this.handleOutfitChange = this.handleOutfitChange.bind(this)
    this.getOutfits = this.getOutfits.bind(this)
  }



  handleOutfitChange(){
    this.getOutfits()
  }

  getOutfits(){
    if(this.props.loggedIn === false){
      this.props.history.pushState(null, '/');
    }
    let self = this
    let userId = this.props.userSession.objectId
    $.ajax({
      url: 'https://api.parse.com/1/classes/Outfit',
      type: 'GET',
      data: {
        where: JSON.stringify({
          "user": {
            "__type": "Pointer",
            "className": "_User",
            "objectId": userId
          }
        })
      },
      success: function(response){
        console.log('you got outfits',response)
        self.setState({
          userOutfits: response.results
        })
      }
    })
  }

  componentDidMount(){
    this.getOutfits()
  }

  render () {
    console.log(this.state)
    console.log(this.state.userOutfits)
    console.log(this.props.publicFeedUserOutfits)

    let userOutfits = ''
    if(this.props.publicFeedUser.user === false){
      userOutfits = this.state.userOutfits}
    else{
        userOutfits = this.props.publicFeedUserOutfits
      }

    let outfits = userOutfits.map( outfit => {
      return <OutfitItem key={outfit.objectId} outfit={outfit} handleOutfitChange={this.handleOutfitChange}/>
      })

    return(
      <section className="outfitPage">
        {outfits}
      </section>
    )
  }
}
export default Outfits;
