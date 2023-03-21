import React, { useState } from 'react'
import logo2 from '../../../static/KD_logo_mark_web.svg'
import logo7 from '../../../static/KD_arrow_icon.svg'
import logo8 from '../../../static/KD_cross_icon.svg'
import './Data.css'

function Data() {
  const [bar, setBar] = useState(false)

  return (
    <>
      <div className='homeDiv4'>
        <img className='img2' src={logo2} alt="" />
        <div className='homeDiv5'>
          <div className='homeDiv6'>
            <p>+49 40 604 36 917</p>
            <a href="">info@kd-recht.de</a>
          </div>
          <div className='homeDiv6'>
            <h5>Schwarzenbergstr.21 21073 Hamburg</h5>
            <img style={{display: bar ? 'none' : 'inline-flex'}} onClick={() => setBar(true)} src={logo7} alt="" />
            <img style={{display: bar ? 'inline-flex' : 'none'}} onClick={() => setBar(false)} src={logo8} alt="" />
          </div>
        </div>
      </div>
      <div style={{maxHeight: bar ? '1870px' : '0'}} className="homeDiv7">
        <div className='homeDiv8'>
          <h3 className='homeDiv8H3'>Anschrift:</h3>
          <h4 className='homeDiv8H4'>Schwarzenbergstr.21 <br /> 21073 Hamburg</h4>
          <p className='homeDiv8P'>Tel: +49 (0) 40 60436917 Fax: +49 (0) 40 60436916 e-mail: <a className='homeDiv8A' href="">info@kd-recht.de</a></p>
          <div className='homeDiv12'>
            <img className='homeImg3' src="https://play-lh.googleusercontent.com/Kf8WTct65hFJxBUDm5E-EpYsiDoLQiGGbnuyP6HBNax43YShXti9THPon1YKB6zPYpA" alt="" />
            <p className='homeDiv8P'>Routenplaner</p>
          </div>
        </div>
        <div className='homeDiv9'>
          <h3 className='homeDiv8H3'>Anfahrt mit PKW:</h3>
          <h3 className='homeDiv8H3'>Aus Richtung Lübeck:</h3>
          <h4 className='homeDiv8H4'>Wenn Sie von der A1 die Ausfahrt 38 „Hamburg-Harburg“ nehmen, erreichen Sie unβser Büro in ca. 5 Minuten. In der Schwarzenberβstraße und umliegenden Straßen finden Sie gebührenfreie Parkplätze.</h4>
          <h3 className='homeDiv8H3'>Aus Richtung A7 Flensburg, Bremen oder Hannover:</h3>
          <h4 className='homeDiv8H4'>Wir empfehlen die A7 an der Ausfahrt 32-AS Hamburg-Heimfeld zu verlassen. Die Fahrtzeit zu unserem Büro beträgt etwa 5 Minuten. In der Schwarzenbergstraße und umliegenden Straßen finden Sie gebührenfreie Parkplätze.</h4>
        </div>
        <div className='homeDiv99'>
          <h3 className='homeDiv8H3'>Anfahrt mit öffentlichen Verkehrsmitteln:</h3>
          <h4 className='homeDiv8H4'>S-Bahn Linie 3 und 31, Station “Harburg-Rathaus“ Ausgang: Schwarzenbergstraße oder Benningsenstraße (Finanzamt Hamburg-Harburg)</h4>
          <h4 className='homeDiv8H4'>Bus-Linien: 141, 142, 143, 144, 145, 153, 157, 241, 244, 246, 443 bis “Harburg-Rathaus”</h4>
          <div className="homeDiv10">
            <img className='homeImg2' src="https://www.hvv.de/resource/crblob/1562/db32618f00e4e10dca79755947e3c639/logo-svg-data.svg" alt="" />
            <h4 className='homeDiv8H4'>Fahplan finden</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Data