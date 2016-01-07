import React from 'react';
import {Link} from 'react-router';
import $ from '../ajax';
import Closet from './closet';

class AddItem extends React.Component {

  constructor(props){
    super(props)

    this.handleChangeFileUrl =  this.handleChangeFileUrl.bind(this)
    this.saveClothingItem = this.saveClothingItem.bind(this)
    this.updateCloset = this.updateCloset.bind(this)

    this.state = {
        img : null,
        type : {},
        discription : {},
        brand : {},
        weather : {},
        style : {}
    }
    console.log(this.props);
  }

  componentDidMount(){
    if(this.props.loggedIn === false){
      this.props.history.pushState(null, '/');
    }
  }

  updateCloset(){
    console.log('you created a user closet')
    let self = this
    let userId = this.props.userSession.objectId

    $.ajax({
      url: 'https://api.parse.com/1/classes/Article',
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
        console.log('you made the closet',response)
          self.props.createUserCloset(response)
      }
    })
  }

  saveClothingItem(e){
    console.log('you clicked a button');
    console.log("this is the user closet prop ----->", this.props.userCloset)
    let userCloset = this.props.userCloset

    console.log(userCloset);
    e.preventDefault()
    let type = this.refs.type.value
    let discription = this.refs.discription.value
    let brand = this.refs.brand.value
    let weather = this.refs.weather.value
    let style = this.refs.style.value
    let img = this.state.img
    let userId = this.props.userSession.objectId
    let self = this
    let user = {
      "__type": "Pointer",
      "className": "_User",
      "objectId": userId
    };

    let clothingItem = {
      type,
      discription,
      brand,
      weather,
      style,
      img,
      user
    }
    $.ajax({
      url:'https://api.parse.com/1/classes/Article',
      type: 'POST',
      data: JSON.stringify(clothingItem)
    }).done((result) => {
      console.log('sent item to closet', result)
      self.updateCloset()
    })
  }

  handleChangeFileUrl(e) {
    console.log('Firepicker URL', e.target.value);
    let img = e.target.value
    this.setState({
      img: img
    })
  }

  componentDidMount() {
    const filepickerElement = this.refs.filepicker;
    if (typeof filepicker !== 'undefined') {
      filepicker.constructWidget(filepickerElement);
    }
    filepickerElement.addEventListener('change', this.handleChangeFileUrl, false);
  }

  componentWillUnmount() {
    this.refs.filepicker.removeEventListener('change', this.handleChangeFileUrl, false);
  }

  render(){

    let newlyUploadedImage = <span className="placeholder"><span className="image-placeholder"></span></span>;
    if (this.state.img){
      newlyUploadedImage = <img src={this.state.img}/>;
    }

    return(
      <div className="mycloset">
      <h4>ADD ITEM</h4>
      <section className="upload">
        <input className="filePicker" type="filepicker"
               data-fp-apikey="A73ighb7VQwywW2MGVsMTz"
               ref="filepicker"
               data-fp-button-class="filePickerBtn"
               data-fp-mimetypes="image/*"
               data-fp-container="modal"
               />
        <section className="uploadedImage">{ newlyUploadedImage }</section>
        </section>
        <section className="imageInputs">
          <input className="inputs" type="text" ref="discription" placeholder="Title"/>
          <input className="inputs" type="text" ref="brand" placeholder="Brand"/>
          <select className="type" ref="type">
            <option value="Top"> Top </option>
            <option value="Bottom"> Bottom </option>
            <option value="Shoes"> Shoes </option>
            <option value="Accessory"> Accessory </option>
          </select>
          <select className="weather" ref="weather">
            <option value="sunny"> Sunny </option>
            <option value="rainy"> Rainy </option>
            <option value="snowy"> Snowy </option>
            <option value="normaly"> Normal </option>
          </select>
          <select className="style" ref="style">
            <option value="formal"> Formal </option>
            <option value="casual"> Casual </option>
            <option value="comfy"> Comfy </option>
            <option value="active"> Active </option>
          </select>
          <input className="saveItem" type="button" onClick={this.saveClothingItem} value="Save Item"/>
          <Link className="toCloset" to="/closet">Go to closet</Link>
        </section>
      </div>
    )
  }

}

export default AddItem;
