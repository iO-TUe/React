import { useEffect, useState } from 'react';
import './gauge.css';

export default function Gauge(props: { value: number, recurse: boolean }) {
  const [bool, setBool] = useState(false);

  useEffect(() => {
    setTimeout(() => setBool(props.recurse), 10);
  }, [props.recurse])

  return <>
    <div role='insertion' className="wrapper" onClick={() => setBool(true)}>
      <svg viewBox="0 0 120 120" className="gauge">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#18B6F6" />
            <stop offset="1000%" stopColor="#AC7FF4" />
          </linearGradient>
        </defs>
        <circle r="56" cx="60" cy="60" strokeWidth="8" style={{
          fill: '#000',
          stroke: '#0000'
        }}
        />
        <circle
          r="56"
          cx="60"
          cy="60"
          strokeWidth="8"
          style={{
            transform: 'rotate(-87.9537deg)',
            strokeDasharray: `${props.value * 3.51} 351.858`,
            fill: 'none',
            transformOrigin: '50% 50%',
            strokeLinecap: 'round',
            stroke: 'url(#gradient)'
          }}
        />
      </svg>
      <span className="value">{props.value}</span>
    </div>
    {(bool && props.value < 123) && <div className="recurse"><Gauge value={props.value + 1} recurse={true} /><Gauge value={props.value + 5} recurse={true} /></div>}
  </>
};
