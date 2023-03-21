import React, { useEffect, useState } from 'react'

function Clock1() {
  useEffect(() => {
    const intervalId = setInterval(() => setTime(getTime()), 1000)
    return () => clearInterval(intervalId)
  }, [])
      
  const getTime = () => {
    return new Date().toLocaleTimeString([])
  }
    
  const [time, setTime] = useState(getTime())
      
  const getHourDegree = () => {
    const date = new Date()
    const minute = date.getMinutes()
    const hour = date.getHours() - 3
    if(hour > 12 || hour === 0){
      return (+(Math.floor(hour - 12) * 30) - 180) + minute * 0.5
    } else {
      return ((hour * 30) - 180) + minute * 0.5
    }
  }
  
  const getMinuteDegree = () => {
    const date = new Date()
    const minute = date.getMinutes()
    return (minute * 6) - 180
  }
    
  const getSecondDegree = () => {
    const date = new Date()
    const second = date.getSeconds()
    return (second * 6) - 180
  }

  return (
    <div className="clock">
      <div className="clockLine1">
        <span className='line'></span>
        <span className='line'></span>
      </div>
      <div className="clockLine2">
        <span className='line'></span>
        <span className='line'></span>
      </div>
      <p className='state1'>HAMBURG</p>
      <div className="hour-hand" style={{ transform: `rotate(${getHourDegree()}deg)` }} />
      <div className="minute-hand" style={{ transform: `rotate(${getMinuteDegree()}deg)` }} />
      <div className="second-hand" style={{ transform: `rotate(${getSecondDegree()}deg)` }} />
      <div className="center" />
    </div>
  )
}

export default Clock1