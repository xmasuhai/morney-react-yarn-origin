import styled from 'styled-components'

// use requires for not tree-shaking svg
// require('assets/icons/bills.svg')
// require('assets/icons/edit.svg')
// require('assets/icons/statistics.svg')

// 批量导入 svg
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext);
};

// 捕获报错
try {
  importAll(require.context('../assets/icons/', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Props = {
  name: string
}

const SVG = styled.svg`
  width: 24px;
  height: 24px;
`

export const Icon = (props: Props) => {
  return (
    <SVG>
      <use xlinkHref={`#${props.name}`}></use>
    </SVG>
  )
}
