import { useEffect, useState } from 'react'
import './gauge.css'

export default function Gauge(props: { value: number, max: number, recurse: boolean }) {
  const [bool, setBool] = useState(false)

  // console.log("Script: Gauge")

  useEffect(() => {
    setTimeout(() => setBool(props.recurse), 0)
  }, [props.recurse])

  return <>
    {/* {console.log("Render: Gauge")} */}
    <div role='feed' className="g-wrapper" onClick={() => setBool(true)}>
      <svg viewBox="0 0 120 120" className="gauge">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#43c3ec" />
            <stop offset="1000%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <circle r="56" cx="60" cy="60" strokeWidth="8" style={{ fill: '#000', stroke: '#0000' }} />
        <circle r="56" cx="60" cy="60" strokeWidth="8" className='stroke' style={{ strokeDasharray: `${props.value * 3.51} 351.858` }} />
      </svg>
      <span className="value">{props.value}</span>
    </div>
    {(bool && props.max > 0) && <div className="recurse">
      <Gauge value={props.value + 1} max={props.max - 1} recurse={true} />
      <Gauge value={props.value - 1} max={props.max - 1} recurse={true} />
    </div>}
  </>
};
