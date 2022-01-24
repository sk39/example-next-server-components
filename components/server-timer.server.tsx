import dayjs from 'dayjs'
import RenderSideLabel from './render-side-label'

function getDataTime() {
  return dayjs().format('YYYY/MM/DD HH:mm:ss')
}

export default function ServerTimer() {
  return (
    <div className="example-block">
      <div className="example-title">Server Component</div>
      <div className="timer-label">
        <div> Rendered at</div>
        <div suppressHydrationWarning> {getDataTime()}</div>
      </div>
      <RenderSideLabel />
    </div>
  )
}
