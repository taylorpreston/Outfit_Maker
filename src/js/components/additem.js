import React from 'react';
import $ from 'jquery'
import {Link} from 'react-router';


import headers from '../headers-setup'
import Closet from './closet';

class AddItem extends React.Component {

  constructor(props){
    super(props)

    this.handleChangeFileUrl =  this.handleChangeFileUrl.bind(this)
    this.saveClothingItem = this.saveClothingItem.bind(this)

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
      console.log('sent item to closet')
      console.log(result)
    })


    // this.props.createUserCloset()
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

    let newlyUploadedImage = <span></span>;
    if (this.state.img){
      newlyUploadedImage = <img src={this.state.img}/>;
    }

    return(
      <div className="mycloset">
      <h1>Closet</h1>
        <input className="filePicker" type="filepicker"
               data-fp-apikey="A73ighb7VQwywW2MGVsMTz"
               ref="filepicker"
               data-fp-button-class="filePickerBtn"
               data-fp-mimetypes="image/*"
               data-fp-container="modal"
               />
             <section className="uploadedImage">{ newlyUploadedImage }</section>
        <section className="imageInputs">
        <input type="text" ref="discription" placeholder="item discription"/>
        <input type="text" ref="brand" placeholder="brand"/>
        <select className="type" ref="type">
          <option value="Top"> Top </option>
          <option value="Bottom"> Bottom </option>
          <option value="Shoes"> Shoes </option>
          <option value="Accessory"> Accessory </option>
        </select>
        <select className="weather" ref="weather">
          <option value="sunny"> sunny </option>
          <option value="rainy"> rainy </option>
          <option value="snowy"> snowy </option>
          <option value="normaly"> normaly </option>
        </select>
        <select className="style" ref="style">
          <option value="fomal"> fomal </option>
          <option value="casual"> casual </option>
          <option value="comfy"> comfy </option>
          <option value="active"> active </option>
        </select>
        <input type="button" onClick={this.saveClothingItem} placeholder="bitch"/>
        <Link className="closetView" to="/closet">Go to closet</Link>
        </section>
      </div>
    )
  }

}

export default AddItem;
