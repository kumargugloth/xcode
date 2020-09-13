import React, { Component } from 'react'

export class Stories extends Component {
  render() {
    return (
        <div id="stories">
        <div className="experts innercontainer1">
          <div className="row">
            <div className="col-md-12" style={{textAlign:"center"}}>
              <div style={{color:"#4a4a4a",fontSize:32,marginBottom:30}}>Inspiring Stories for your life</div>
              <div style={{marginBottom:30}}>
                Lorem ipsum color sit a met,conseteur sadipscing  elitr,sed diam nonumy ,Lorem ipsum color sit a met,conseteur sadipscing  elitr,sed diam nonumy 
              </div>
            </div>
            <div className="col-md-3 viewall" style={{textAlign:"center",}}>
              <div style={{color:"#fff",fontSize:32,marginBottom:30}} className='viewalltext'>View More</div>
            </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Stories
