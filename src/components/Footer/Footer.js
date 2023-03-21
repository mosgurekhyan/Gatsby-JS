import React from 'react'
import './Footer.css'
import logo2 from '../../../static/KD_logo_mark_web.svg'
import logo3 from '../../../static/KD_web_linkedin_logo.svg'
import logo4 from '../../../static/KD_web_fb_logo.svg'
import logo5 from '../../../static/KD_web_odnok_logo.svg'
import logo6 from '../../../static/KD_web_vk_logo.svg'

function Footer() {
  return (
    <div className='footer'>
      <div className="border"></div>
      <div className="footerDiv">
        <ul className='footerUl'>
          <img className='img2' src={logo2} alt="" />
          <ul className='footerLi'>
            <li className='mainLi'>Kontakt:</li>
            <li>Schwarzenbergstr. 21</li>
            <li>21073 Hamburg</li>
            <li>+49 40 604 36 917</li>
            <a href=''>info@kd-recht.de</a>
          </ul>
          <ul className='footerLi'>
            <li className='mainLi'>Menu:</li>
            <li>Anwälte</li>
            <li>Privatperson</li>
            <li>Unternehmen</li>
            <li>Beratungstermit</li>
          </ul>
          <ul className='footerLi'>
            <li>Formulare</li>
            <li>Impressum</li>
            <li>Dateschutz</li>
          </ul>
        </ul>
        <div className="footerDiv1">
          <p className='footerP'>web-design: coding pictures</p>
          <div className='footerDiv2'>
            <div className="footerDiv3">
              <img className='img3' src={logo3} alt="" />
              <img className='img3' src={logo4} alt="" />
              <img className='img3' src={logo5} alt="" />
              <img className='img3' src={logo6} alt="" />
            </div>
            <h3 className='footerH3'>kin • dimitrow Rechtsanwälte</h3>
            <h6 className='footerH6'>©2018 <a href="">kin • dimitrow</a> Rechtsanwälte GbR</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer