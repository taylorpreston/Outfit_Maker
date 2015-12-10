import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {isVisible: false}
    this.toggleNav = this.toggleNav.bind(this)
  }
  toggleNav(){
    this.setState({isVisible: !this.state.isVisible})
  }
  render () {
    let className = 'headerNav';
    if (this.state.isVisible) {
      className = className + ' visible';
    }
    return (
      <header className="mainheader">
        <a onClick={this.toggleNav} href="#" className="click">Click</a>

        <section className={className}>
          <Link className="headerlink" to="/"> Home </Link>
          <Link className="headerlink" to="/login"> Login </Link>
          <Link className="headerlink" to="/register"> Register </Link>
          <Link className="headerlink" to="/dashboard"> Dashboard </Link>
          <Link className="headerlink" to="/closet"> Closet </Link>
          <Link className="headerlink" to="/outfits"> Outfits </Link>
          <Link className="headerlink" to="/outfitdesigner"> Outfit Designer </Link>
          <Link className="headerlink" to="/publicfeed"> Public Feed </Link>
        </section>
      </header>
    )
  }
}

export default Header;
