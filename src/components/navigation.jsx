import React, { Component } from "react";
import Logo from '../'
export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top" style={{color:"#E29563",fontSize:18}}>
              {/* <img src={'..'} /> */}
              MY WELLNESS SUTRA
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul style={{flexDirection:"row"}} className="nav navbar-nav navbar-right">
              
              <li>
                <a href="#team" className="page-scroll">
                  Login
                </a>
              </li>
              <li>
                            <div style={{marginLeft:6,marginRight:6,borderRight:"2px solid #EBECEE",marginTop:10,height:33}}></div>

              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
