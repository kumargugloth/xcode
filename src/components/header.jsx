import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-offset-2 intro-text">
                  <div style={{backgroundColor:"#fff",borderRadius:40,height:40}}>
                  </div>
                </div>
                <div className="col-md-4 col-md-offset-2">
                  <div style={{backgroundColor:"#fff",borderRadius:40,height:40}}>
                  </div>
                </div>
                <div className="col-md-2 col-md-offset-2" style={{paddingBottom:150}}>
                  <div style={{backgroundColor:"#fff",borderRadius:40,height:40}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
