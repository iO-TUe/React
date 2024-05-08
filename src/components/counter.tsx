"use client"
import { useEffect, useState } from 'react'
import Button from './button'
import './counter.css'
import Gauge from "./gauge"

export default function Counter(props: { initialValue: number, maxValue: number, recurse: boolean }) {
  const [count, setCount] = useState(props.initialValue)
  function add() {
    if (count < 100) setCount(count + 1)
  }
  function subtract() {
    if (count > 0) setCount(count - 1)
  }


  useEffect(() => {
    if (typeof window != 'undefined') {
      const delay = Date.now() + 50
      while (Date.now() < delay) {
        console.log()
      }
    }
  }, [])

  // console.count("Script: Counter")
  return <>
    {/* {console.count("Render: Counter")} */}
    <div className="wrapper">
      <Button disabled={count === 0} fn={subtract} sign="-" />
      <div className="counters">
        {[...Array(props.recurse ? 1 : props.maxValue)].map((_, idx) =>
          <Gauge key={idx} value={count} max={props.maxValue} recurse={false} />)}
      </div>
      <Button disabled={count === 100} fn={add} sign="+" />
    </div >
  </>
}
