import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import './index.scss'
import {DevSupport} from '@react-buddy/ide-toolbox'
import {ComponentPreviews, useInitial} from './dev'

/**
 * @Description: 入口文件
 * @Author: XuShuai
 * @Date: 2023-10-28 19:52:35
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-01-18 20:45:55
 * @FilePath: src/index.tsx
 */
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
