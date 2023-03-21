import React, { useEffect, useState } from 'react'
import './Anwälte.css'
import logo7 from '../../../static/KD_arrow_icon.svg'

function Anwälte() {
  const [bar, setBar] = useState(false)
  const [bar2, setBar2] = useState(false)
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [])
  
  return (
      <div className='anwälte'>
        <div className='anwälte1'>
          <h2 className='anwälteH2'>Alexander Kin</h2>
          <img className='anwälteImg1' src="https://th.bing.com/th/id/OIP.VS3f8K--S7TfYs3DIlpMzAAAAA?pid=ImgDet&w=151&h=183&c=7" alt="" />
          <div style={{height: bar ? 'auto' : '135px', marginTop: bar ? '-115px' : '0'}} className='anwälteDiv1'>
            <h4>Deutch -und Russischsprachiger Rechtsanwalt Alexander Kin hat Rechtswissenschaften in Hamburg studiert. Nach dem Studium leistete er sein Rechtsreferendariat im Bezirk des Oberlandesgerichts Düsseldorf des ... Bundeslandes Nordrhein-Westfalen ab. Dabei arbeitete er beim Oberlandesgericht Düsseldorf, in der Verwaltung und für mehrβere Anwaltskanzleien. Seit 2007 ist er als deutch -und russischsprachiger Rechtsanwalt in Hamburg tätig.</h4>
          </div>
          <img onClick={() => setBar(!bar)} style={{transform: bar ? 'rotateZ(0)' : 'rotateZ(180deg)'}} className='anwälteImg2' src={logo7} alt="" />
          <p style={{visibility: bar ? 'hidden' : 'visible'}}>mehr lesen</p>
        </div>
        <div style={{marginTop: ((screenSize < 768) && bar) ? '100px' : ''}} className='anwälte2'>
          <h2 className='anwälteH2'>Eduard Dimitrow</h2>
            <img className='anwälteImg1' src="https://th.bing.com/th/id/OIP.1ydnW2CB29qgunhmZkhz4QAAAA?pid=ImgDet&w=173&h=173&c=7" alt="" />
            <div style={{height: bar2 ? 'auto' : '135px', marginTop: bar2 ? '-115px' : '0'}} className='anwälteDiv1'>
              <h4>Deutch -und Russischsprachiger Rechtsanwalt Eduard Dimitrow studierte Rechtswissenschaften in Hamburg mit dem Schwerpunkt Handels- und Gesellschaftsrecht. Sein Rechtsreferendariat absolvierte er in Hamburg, Rheinland-Pfalz, Baden-Württemberg und den USA. .. Bundeslandes Nordrhein-Westfalen ab. Dabei arbeitete er beim Oberlandesgericht Düsseldorf, in der Verwaltung und für mehrere Anwaltskanzleien. Seit 2007 ist er als deutch -und russischsprachiger Rechtsanwalt in Hamburg tätig.</h4>
            </div>
            <img onClick={() => setBar2(!bar2)} style={{transform: bar2 ? 'rotateZ(0)' : 'rotateZ(180deg)'}} className='anwälteImg3' src={logo7} alt="" />
            <p style={{visibility: bar2 ? 'hidden' : 'visible'}}>mehr lesen</p>
          </div>    
      </div>
  )
}

export default Anwälte
