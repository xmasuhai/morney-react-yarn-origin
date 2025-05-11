import styled from 'styled-components'
import {
  oneLineEllipsisMixin
} from 'components/common/styled/oneLineEllipsisMixin'

/**
 * @Description: 标签名称列表样式
 * @Author: XuShuai
 * @Date: 2025-05-11 15:39:20
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-11 16:42:09
 * @FilePath: src/components/statistics/styled/RecordTagNamesStyled.tsx
 */
export const RecordTagNamesStyled = styled.ul.attrs<{
  $maxWidth?: string,
}>((props) =>
  // 此处属性会注入到 DOM 中
  ({
    $maxWidth: props.$maxWidth || '100%',
  })
)`
  display: flex;
  flex-wrap: nowrap;

  & > .tag {

    & > .names {
      ${oneLineEllipsisMixin};
    }
  }
`
