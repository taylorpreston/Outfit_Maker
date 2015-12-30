import React from 'react'
import OutfitItem from './outfit-item'

class Outfits extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    if(this.props.loggedIn === false){
      this.props.history.pushState(null, '/');
    }
  }

  render () {
    console.log(this.props)
    let userOutfits = this.props.userOutfits.results
    console.log(userOutfits)

  let outfits = userOutfits.map( outfit => {
   return <OutfitItem key={outfit.objectId} outfit={outfit}/>
  })

    return(
      <section className="outfitPage">
        {outfits}
      </section>
    )
  }
}

export default Outfits;
