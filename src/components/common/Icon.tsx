import styled from 'styled-components'
import React from 'react'
import classnames from 'classnames'

// 批量导入 svg
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext)
}

// 捕获报错
try {
  importAll(require.context('assets/icons', true, /\.svg$/))
} catch (error) {
  console.error(error)
}

type Props = {
  name?: string
} & React.SVGAttributes<SVGElement>

const SVG = styled.svg`
  width: 24px;
  height: 24px;
`

/**
 * @Description: svg图标组件
 * @Author: XuShuai
 * @Date: 2023-12-14 05:26:20
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-24 22:05:53
 * @FilePath: src/components/common/Icon.tsx
 */
export const Icon = (props: Props) => {
  const {name, className, children, ...restProps} = props

  return (
    <SVG className={classnames('icon', className)} {...restProps}>
      {name && <use xlinkHref={`#${name}`}></use>}
    </SVG>
  )
}
