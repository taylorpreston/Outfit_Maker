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
        <a href="#">OUTFIT MAKER</a>
        <span onClick={this.toggleNav} href="#" className="click">Click</span>

        <section className={className}>
          <Link onClick={this.toggleNav} className="headerlink" to="/"> Home </Link>
          <Link onClick={this.toggleNav} className="headerlink" to="/login"> Login </Link>
          <Link onClick={this.toggleNav} className="headerlink" to="/register"> Register </Link>
          <Link onClick={this.toggleNav} className="headerlink" to="/dashboard"> Dashboard </Link>
          <Link onClick={this.toggleNav} className="headerlink" to="/closet"> Closet </Link>
          <Link onClick={this.toggleNav} className="headerlink" to="/outfits"> Outfits </Link>
          <Link onClick={this.toggleNav} className="headerlink" to="/outfitdesigner"> Outfit Designer </Link>
          <Link onClick={this.toggleNav} className="headerlink" to="/publicfeed"> Public Feed </Link>
        </section>
      </header>
    )
  }
}

export default Header;
