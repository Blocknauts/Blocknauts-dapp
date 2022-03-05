import React from 'react'
import './calltoaction.css'
import Laptop from '../../assets/laptop.png'

function Calltoaction() {
  return (
    <div className="calltoaction__container">
      <div className="calltoaction__maincontainer">
        <div>
          <h1>Enter our app now <br />and start enjoying <br />our platform!</h1>
        </div>
        <div>
          <p>We will help you all the way through your website creation!</p>
        </div>
        <div>
          <button>Go to app</button>
        </div>
      </div>
      <div className="calltoaction__image">
        <img src={Laptop}/>
      </div>
    </div>
  )
}

export default Calltoaction