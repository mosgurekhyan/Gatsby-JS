import React from 'react'
import './Home.css'
import Clock1 from '../Clock1/Clock1'
import Clock2 from '../Clock2/Clock2'
import Clock3 from '../Clock3/Clock3'
import Clock4 from '../Clock4/Clock4'

function Home() {
  return (
    <div className='homeDiv'>
      <div className="homeDiv2">
        <Clock1/>
        <Clock2/>
        <Clock3/>
        <Clock4/>
      </div>
      <div className="homeDiv3">
        <h1>Wir sprechen Ihre Sprache</h1>
        <h2>Ihr Rechtsanwalt berät Sie bei Konflikten grenzüber-greifend russisch-deutsch.</h2>
      </div>
    </div>
  )
}

export default Home