import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Header extends Component {
   render() {

      if(this.props.data){
         var name = this.props.data.name;
         var occupation= this.props.data.occupation;
         var description= this.props.data.description;
         var city= this.props.data.address.city;
         var networks= this.props.data.social.map(function(network){
         return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer" aria-label={network.name}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><Link to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                  <li><Link to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                  <li><Link to="resume" spy={true} smooth={true} duration={500}>Resume</Link></li>
               </ul>
            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">{name}</h1>
                  <h2>
                     <span> {occupation} {city} </span> 
                     <br /> 
                     <span> {description} </span> 
                  </h2>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <Link to="about" spy={true} smooth={true} duration={500}><i className="icon-down-circle"></i></Link>
            </p>

         </header>
      );
  }

}

export default Header;
