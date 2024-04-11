import { useState } from 'react'
import Button from './button.tsx'
import './counter.css'
import Gauge from "./gauge.tsx"

export default function Counter(props: { initialValue: number, maxValue: number, recurse: boolean }) {
  const [count, setCount] = useState(props.initialValue)
  function add() {
    if (count < 100) setCount(count + 1)
  }
  function subtract() {
    if (count > 0) setCount(count - 1)
  }

  // console.log("Script: Counter")

  return <>
    {/* {console.log("Render: Counter")} */}
    <div className="wrapper">
      <Button disabled={count === 0} fn={subtract} sign="-" />
      <div className="counters">
        {[...Array(props.recurse ? 1 : props.maxValue)].map((_, idx) =>
          <Gauge key={idx} value={count} max={props.maxValue} recurse={false} fn={() => idx} />)}
      </div>
      <Button disabled={count === 100} fn={add} sign="+" />
    </div >
  </>
};
