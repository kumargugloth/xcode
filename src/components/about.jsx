import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{textAlign:"center"}}>
              <div style={{color:"#fff",fontSize:32,marginBottom:30}}>Trending Blogs</div>
              <div style={{marginBottom:30}}>
                Lorem ipsum color sit a met,conseteur sadipscing  elitr,sed diam nonumy ,Lorem ipsum color sit a met,conseteur sadipscing  elitr,sed diam nonumy 
              </div>
            </div>
            <div className="col-xs-12 col-md-4"> 
            <img src="img/about.jpg" className="img-responsive" alt=""/> 
            <div>blog1</div>
            </div>
            <div className="col-xs-12 col-md-4"> 
            <img src="img/about.jpg" className="img-responsive" alt=""/> 
            <div>blog2</div>
            </div>
            <div className="col-xs-12 col-md-4">
               <img src="img/about.jpg" className="img-responsive" alt=""/>
               <div>blog3</div>
                </div>
                <div className="col-md-3 viewall" style={{textAlign:"center",}}>
              <div style={{color:"#fff",fontSize:32,marginBottom:30}} className='viewalltext'>View All Blogs</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
