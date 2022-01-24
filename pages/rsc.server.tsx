import type { NextPage } from 'next'
import ClientCounter from '../components/client-counter.client'
import ServerTimer from '../components/server-timer.server'

const RscPage: NextPage = ({}) => {
  return (
    <main>
      <h1 className="page-title">Example Server Components</h1>
      <div className="flex-container">
        <ClientCounter />
        <ServerTimer />
      </div>
    </main>
  )
}

export default RscPage
