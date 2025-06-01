import {gotoWebStorm, Inspector, InspectorProps} from 'react-dev-inspector'
import React, {PropsWithChildren} from 'react'

const InspectorWrapper = process.env.NODE_ENV === 'development'
  ? Inspector
  : React.Fragment

/**
 * @Description: 组件调试工具
 * @Author: XuShuai
 * @Date: 2025-06-01 20:11:40
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-06-01 21:49:56
 * @FilePath: src/components/common/ReactComponentInspector.tsx
 */
export const ReactComponentInspector: React.FC<PropsWithChildren<InspectorProps>> = (props: InspectorProps
) => {
  return (
    <InspectorWrapper
      onInspectElement={({codeInfo}) => {
        // 拼接工作目录
        if(codeInfo.absolutePath === undefined) {
          codeInfo.absolutePath = `${process.env.CWD}/${codeInfo.relativePath}`
          delete codeInfo.relativePath
        }

        // 调起vscode
        // gotoVSCode(codeInfo)

        // 调起WebStorm
        gotoWebStorm(codeInfo)
      }}
    >
      {props.children}
    </InspectorWrapper>
  )
}
