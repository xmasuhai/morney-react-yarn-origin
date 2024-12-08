import styled from 'styled-components'

// 批量导入 svg
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext)
}

// 捕获报错
try {
  importAll(require.context('assets/icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}

type Props = {
  name: string
}

const SVG = styled.svg`
  width: 24px;
  height: 24px;
`

/**
 * @Description: svg图标组件
 * @Author: XuShuai
 * @Date: 2023-12-14 05:26:20
 * @LastEditors: XuShuai
 * @LastEditTime: 2024-12-08 16:54:58
 * @FilePath: src/components/Icon.tsx
 */
export const Icon = (props: Props) => {
  return (
    <SVG className="icon">
      <use xlinkHref={`#${props.name}`}></use>
    </SVG>
  )
}
