import React from 'react';

class Closet extends React.Component {
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
  render () {

    return(
      <div className="mycloset">
      <h1>Closet</h1>
        <input type="filepicker"
               data-fp-apikey="A73ighb7VQwywW2MGVsMTz"
               ref="filepicker"
               data-fp-mimetypes="image/*"
               data-fp-container="modal"
               />
      </div>
    )
  }
  handleChangeFileUrl(e) {
    console.log('Firepicker URL', e.target.value);
  }
}

export default Closet;
