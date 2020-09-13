import React, { Component } from 'react'

export class ExpertsPanel extends Component {
  render() {
    return (
        <div id="experts">
        <div className="experts innercontainer1">
          <div className="row">
            <div className="col-md-12" style={{textAlign:"center"}}>
              <div style={{color:"#4a4a4a",fontSize:32,marginBottom:30}}>Our Experts Panel</div>
              <div style={{marginBottom:30}}>
                Lorem ipsum color sit a met,conseteur sadipscing  elitr,sed diam nonumy ,Lorem ipsum color sit a met,conseteur sadipscing  elitr,sed diam nonumy 
              </div>
            </div>
            <div className="col-xs-12 col-md-3"> 
            <img src="img/about.jpg" className="img-responsive" alt=""/> 
            <div>blog1</div>
            </div>
            <div className="col-xs-12 col-md-3"> 
            <img src="img/about.jpg" className="img-responsive" alt=""/> 
            <div>blog1</div>
            </div>
            <div className="col-xs-12 col-md-3"> 
            <img src="img/about.jpg" className="img-responsive" alt=""/> 
            <div>blog2</div>
            </div>
            <div className="col-xs-12 col-md-3">
               <img src="img/about.jpg" className="img-responsive" alt=""/>
               <div>blog3</div>
                </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExpertsPanel
