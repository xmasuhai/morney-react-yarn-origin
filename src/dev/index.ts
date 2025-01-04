/**
 * @Description:
 * @Author: XuShuai
 * @Date: 2025-01-02 21:54:07
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-01-02 21:54:37
 * @FilePath: src/dev/index.ts
 */
import React from 'react'
import {useInitial} from './useInitial'

const ComponentPreviews = React.lazy(() => import('./previews'))

export {
  ComponentPreviews,
  useInitial
}
