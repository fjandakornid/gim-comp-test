import React from 'react'
import { render } from 'react-dom'
import { GimButton } from './lib'

const App = () => (
  <div>
    <h1>Hello React</h1>
    <GimButton label='This is button' />
  </div>
)

render(<App />, document.getElementById('root'))
