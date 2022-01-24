import { useState } from 'react'
import RenderSideLabel from './render-side-label'

export default function ClientCounter() {
  const [count, setCount] = useState(0)
  return (
    <div className="example-block">
      <div className="example-title">Client Component</div>
      <div className="counter-label">{count}</div>
      <button onClick={() => setCount(count + 1)}>Count Up</button>
      <RenderSideLabel />
    </div>
  )
}
