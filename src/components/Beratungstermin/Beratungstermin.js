import React, { useRef } from 'react'
import './Beratungstermin.css'
import logo7 from '../../../static/KD_arrow_icon.svg'
import Footer from '../Footer/Footer'
import logo8 from '../../../static/KD_web_download_icon.svg'

function Beratungstermin() {
  const formRef = useRef(null)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    formRef.current.reset()
  }

  return (
    <div className='beratungstermin'>
      <div className="beratungstermin1">
        <div className="beratungstermin2">
          <form ref={formRef} onSubmit={handleSubmit}>
            <h1 className='beratungsterminH1'>Kontaktformular:</h1>
            <p className='beratungsterminP'>Vor-und Nachname*:</p>
            <input className='inp1' type="text" />
            <p className='beratungsterminP'>Ihre E-mail Adresse*:</p>
            <input className='inp1' type="text" />
            <p className='beratungsterminP'>Telefon für den Kontakt:</p>
            <input className='inp1' type="text" />
            <p className='beratungsterminP'>Ihre Nachricht*:</p>
            <input className='inp2' type="text" />
            <p className='beratungsterminP2'>* wichtige Felder</p>
            <button className='beratungsterminBtn'>Senden <img src={logo7} alt="" /></button>
          </form>
        </div>
        <div className="beratungstermin2">
          <h1 className='beratungsterminH1'>PDF zum Download:</h1>
          <div className='beratungDiv1'>
            <img src={logo8} alt="" />
            <p className='beratungsterminP5'>Vollmacht kd-Rechtsanwälte</p>
          </div>
          <div className='beratungDiv1'>
            <img src={logo8} alt="" />
            <p className='beratungsterminP5'>Unfallfragebogen</p>
          </div>
          <div className='beratungDiv1'>
            <img src={logo8} alt="" />
            <p className='beratungsterminP5'>Fragebogen für die Ehescheidung</p>
          </div>
          <div className='beratungDiv1'>
            <img src={logo8} alt="" />
            <p className='beratungsterminP5'>Schweigepflichtentbindung</p>
          </div>
          <div className='beratungDiv1'>
            <img src={logo8} alt="" />
            <p className='beratungsterminP5'>Erklärung über die persönlichen und wirtschaftlichen Verhältnisse bei Prozess- oder Verfahrenskostenhilfe</p>
          </div>
          <p className='beratungsterminP6'>oder kontaktieren Sie uns gerne folgendes:</p>
          <p className='beratungsterminP'>+49 40 604 36 917 (9:00-18:00, Mo-Fr) info@kd-recht.d</p>
        </div>
      </div>
      {/* ***********************   HIDDEN DIV ************************** */}
      <div style={{display: 'none'}} className="hiddenDiv">
        <div className="beratungstermin2">
          <h1 className='beratungsterminH1'>Vielen Dank!</h1>
          <p className='beratungsterminP'>Ihre Nachricht ist gesendet.Sie erhalten eine Bestätigungsmail an die E-Mail-Adresse, die Sie angegeben haben.</p>
          <p className='beratungsterminP'>Wir bitten Sie, sich mit dem Inhalt der E-Mail vertraut zu machen, damit unser Treffen effektiv verläuft.</p>
          <p className='beratungsterminP'>Ihre Kin • Dimitrow Rechtsanwälte</p>
        </div>
        <div className="beratungstermin2">
          <h1 className='beratungsterminH1'>PDF zum Download:</h1>
          <div className='beratungDiv1'>
            <img src={logo8} alt="" />
            <p className='beratungsterminP5'>Vollmacht kd-Rechtsanwälte</p>
          </div>
          <div className='beratungDiv1'>
            <img src={logo8} alt="" />
            <p className='beratungsterminP5'>Unfallfragebogen</p>
          </div>
          <div className='beratungDiv1'>
            <img src={logo8} alt="" />
            <p className='beratungsterminP5'>Fragebogen für die Ehescheidung</p>
          </div>
          <div className='beratungDiv1'>
            <img src={logo8} alt="" />
            <p className='beratungsterminP5'>Schweigepflichtentbindung</p>
          </div>
          <div className='beratungDiv1'>
            <img src={logo8} alt="" />
            <p className='beratungsterminP5'>Erklärung über die persönlichen und wirtschaftlichen Verhältnisse bei Prozess- oder Verfahrenskostenhilfe</p>
          </div>
          <p className='beratungsterminP6'>oder kontaktieren Sie uns gerne folgendes:</p>
          <p className='beratungsterminP'>+49 40 604 36 917 (9:00-18:00, Mo-Fr) info@kd-recht.d</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Beratungstermin