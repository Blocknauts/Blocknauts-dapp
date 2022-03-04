import React from 'react'
import './mainpage.css'

function Mainpage() {
  return (
    <div className="mainpage__container">
      <div>
        <div className='mainpage__title'>
          <h1>The #1 fully -customizable <br />Web3.0 app</h1>
        </div>
        <div className="mainpage__paragraph">
          <p>Create a smart contract with customizable settings <br />and transfer it in matter of seconds</p>
        </div>
        <div>
          <button className="mainpage__featuresbutton">Explore features</button>
          <button className="mainpage__appbutton">Go to app</button>
        </div>
      </div>
    </div>
  )
}

export default Mainpage