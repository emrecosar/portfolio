import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.className}></i>
            </a>
          </li>
        )
      })
      var name = this.props.data.name;
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
                {networks}
            </ul>
            <ul className="copyright">
                <li>&copy; Copyright {new Date().getFullYear()} {name}</li>
                <li>Made by <span role="img" aria-label="music">&#x1F3A7;</span> &amp; <span role="img" aria-label="sunflower">&#x1F33B;</span></li>
            </ul>
            <ul className="copyright">
                <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    );
  }
}

export default Footer;