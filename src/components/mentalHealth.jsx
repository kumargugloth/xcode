import React, { Component } from 'react'

export class CurrentWeekHeros extends Component {
  render() {
    return (
        <div id="weekheros">
        <div className="container" style={{width:"98%",marginLeft:40,marginRight:40}}>
          <div className="row">
            <div className="col-md-12" style={{textAlign:"center"}}>
              <div style={{color:"#4a4a4a",fontSize:32,marginBottom:30}}>Mental health News</div>
              <div style={{marginBottom:30}}>
                Lorem ipsum color sit a met,conseteur sadipscing  elitr,sed diam nonumy ,Lorem ipsum color sit a met,conseteur sadipscing  elitr,sed diam nonumy 
              </div>
            </div>
            <div className="col-xs-12 col-md-4"> 
            <img src="img/about.jpg" className="img-responsive" alt=""/> 
            <div  style={{display:"flex",flexDirection:"row"}}>
            <div>Category Name</div>
            <div>Date</div>
            </div>
            <div>
              Lorem ipsum dolor sit amet,consectetur
            </div>
            </div>
            <div className="col-xs-12 col-md-4"> 
            <img src="img/about.jpg" className="img-responsive" alt=""/> 
            <div  style={{display:"flex",flexDirection:"row"}}>
            <div>Category Name</div>
            <div>Date</div>
            </div>
            <div>
              Lorem ipsum dolor sit amet,consectetur
            </div>
            </div>
            <div className="col-xs-12 col-md-4"> 
            <img src="img/about.jpg" className="img-responsive" alt=""/> 
            <div style={{display:"flex",flexDirection:"row"}}>
            <div>Category Name</div>
            <div>Date</div>
            </div>
            <div>
              Lorem ipsum dolor sit amet,consectetur
            </div>
            </div>

           
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-2" style={{textAlign:"center",}}>
              <div style={{color:"#fff",fontSize:32,marginBottom:30}} className='viewallweek'>View All</div>
            </div>
           <div className="col-md-5"></div>

        </div>
        
      </div>
    )
  }
}

export default CurrentWeekHeros
