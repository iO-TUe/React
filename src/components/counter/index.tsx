import { useEffect, useReducer } from 'react';
import Gauge from "./gauge.tsx";
import './index.css';

export default function Counter(props: { initialValue: number }) {
  const [count, dispatch] = useReducer(reducer, { value: props.initialValue });

  function reducer(state: { value: number }, action: string): typeof state {
    switch (action) {
      case 'add':
        if (state.value === 99) celebrate();
        return state.value < 100 ? { value: state.value++ } : state
      case 'sub':
        return state.value > 0 ? { value: state.value-- } : state
      default:
        return state
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
  }, [])


  function handleKey({ code }: KeyboardEvent) {
    switch (code) {
      case "ArrowRight":
        return dispatch('add');
      case "ArrowLeft":
        return dispatch('sub');
    }
  }

  return <>
    <div className="wrapper">
      <button className="button" disabled={count.value === 0} onClick={() => dispatch('sub')} aria-label='sub'>
        -
      </button>
      <Gauge value={count.value} recurse={false} />
      <button className="button" disabled={count.value === 100} onClick={() => dispatch('add')} aria-label='add'>
        +
      </button>
    </div >
  </>
};

export const celebrate = async () => {
  const defaults = {
    spread: 360,
    ticks: 70,
    gravity: 0,
    decay: 0.95,
    startVelocity: 30,
    colors: ['006ce9', 'ac7ff4', '18b6f6', '713fc2', 'ffffff'],
    origin: {
      x: 0.5,
      y: 0.35,
    },
  };

  function loadConfetti() {
    return new Promise<(opts: any) => void>((resolve, reject) => {
      if ((globalThis as any).confetti) {
        return resolve((globalThis as any).confetti as any);
      }
      const script = document.createElement('script');
      script.src =
        'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
      script.onload = () => resolve((globalThis as any).confetti as any);
      script.onerror = reject;
      document.head.appendChild(script);
      script.remove();
    });
  }

  const confetti = await loadConfetti();

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 80,
      scalar: 1.2,
    });

    confetti({
      ...defaults,
      particleCount: 60,
      scalar: 0.75,
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
  setTimeout(shoot, 300);
  setTimeout(shoot, 400);
};
