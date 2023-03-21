import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import Anwälte from '../components/Anwälte/Anwälte'
import Kanzlei from '../components/Kanzlei/Kanzlei'
import Privatperson from '../components/Privatperson/Privatperson'
import Unternehmen from '../components/Unternehmen/Unternehmen'
import Beratungstermin from '../components/Beratungstermin/Beratungstermin'
import Home from '../components/Home/Home'
import logo1 from '../../static/KD_logotype_web.svg'  
import Data from '../components/Data/Data'

function Index() {
  const [showImage, setShowImage] = useState(true)
  const [footer, setFooter] = useState(true)
  const [ul, setUl] = useState(false)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)

  const handleClick = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleScroll = (e) => {
    if (e.target.documentElement.scrollTop > 3800){
      setFooter(false)
    }
    if (e.target.documentElement.scrollTop < 3800){
      setFooter(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div style={{display: showImage ? 'inline-flex' : 'none'}} className='mainDIV'>
        <img className='mainImg' src={logo1}/>
      </div>
      <div className='divForData' style={{display: showImage ? 'none' : 'inline'}}>
        <nav>
          <div><img onClick={() => handleClick(ref1)} className='image1' src={logo1}/></div>
          <ul className='ul'>
            <li onClick={() => handleClick(ref2)}>Anwälte</li>
            <li onClick={() => handleClick(ref3)}>Kanzlei</li>
            <li onClick={() => handleClick(ref4)}>Privatperson</li>
            <li onClick={() => handleClick(ref5)}>Unternehmen </li>
            <li onClick={() => handleClick(ref6)}>Beratungstermin </li>
            <p className='navbarP'>Russisch / <span className='navbarSpan'>Deutsch</span></p>
          </ul>
          <img onClick={() => setUl(true)} style={{display: ul ? 'none' : ''}} className='menu' src="https://cdn4.iconfinder.com/data/icons/interface-essential-1/24/button-parallel-vertical-lines-menu-navigation-three-hamburger-512.png" alt="" />
          <ul style={{display: ul ? '' : 'none'}} className='ul2'>
            <img className='close' onClick={() => setUl(false)} src="https://cdn2.iconfinder.com/data/icons/media-controls-5/100/close-512.png" alt="" />
            <li onClick={() => handleClick(ref2)}>Anwälte</li>
            <li onClick={() => handleClick(ref3)}>Kanzlei</li>
            <li onClick={() => handleClick(ref4)}>Privatperson</li>
            <li onClick={() => handleClick(ref5)}>Unternehmen </li>
            <li onClick={() => handleClick(ref6)}>Beratungstermin </li>
          </ul>
        </nav>
        <div ref={ref1}>
          <Home/>
        </div>
        <div style={{display: footer ? 'inline' : 'none'}}>
          <Data/>
        </div>
        <div className="gray"></div>
        <div ref={ref2}>
          <Anwälte/>
        </div>
        <div className="gray"></div>
        <div ref={ref3}>
          <Kanzlei/>
        </div>
        <div className="gray"></div>
        <div ref={ref4}>
          <Privatperson/>
        </div>
        <div className="gray"></div>
        <div ref={ref5}>
          <Unternehmen/>
        </div>
        <div className="gray"></div>
        <div ref={ref6}>
          <Beratungstermin/>
        </div>
      </div>
    </>
  )
}

export default Index
