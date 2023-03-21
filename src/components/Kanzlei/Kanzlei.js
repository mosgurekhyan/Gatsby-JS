import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import './Kanzlei.css'

export default function Kanzlei() {
  const data = useStaticQuery(graphql`
  query SiteInfo {
    site {
      siteMetadata {
        kanzleiH1
        kanzleiH31
        kanzleiP1
        kanzleiH32
        kanzleiP2
        kanzleiH33
        kanzleiP3
        kanzleiH34
        kanzleiP4
        kanzleiP5
      }
    }
  }
 `)
  const {kanzleiH1, kanzleiH31, kanzleiP1, kanzleiH32, kanzleiP2, kanzleiH33, kanzleiP3, kanzleiH34, kanzleiP4, kanzleiP5} = data.site.siteMetadata
  return (
      <div className='kanzlei'>
        <div className="kanzlei1">
          <h1>{kanzleiH1}</h1>
          <h3 className='h31'>{kanzleiH31}</h3>
          <p>{kanzleiP1}</p>
          <h3 className='h31'>{kanzleiH32}</h3>
          <p>• Rechtsbeistand für Privatpersonen & Unternehmen des Mittelstands <br /> • Arbeit in fachübergreifenden Teams mit Notaren und Steuerberatern <br /> • Grenzübergreifende Wahrung Ihrer Interessen <br /> • Bestmögliche persönliche Beratung</p>
          <p>{kanzleiP2}</p>
        </div>
        <div className="kanzlei1">
          <h3 className='h32'>{kanzleiH33}</h3>
          <p>{kanzleiP3}</p>
          <h3 className='h31'>{kanzleiH34}</h3>
          <p>{kanzleiP4}</p>
          <p>{kanzleiP5}</p>
        </div>
      </div>
  )
}

