import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import './index.scss'
import {DevSupport} from '@react-buddy/ide-toolbox'
import {ComponentPreviews, useInitial} from './dev'

const div = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}>
      <App/>
    </DevSupport>
  </React.StrictMode>,
  div
)
