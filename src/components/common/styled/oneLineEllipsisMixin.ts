import {css} from 'styled-components'

/**
 * @Description: mixins text overflow single
 * @Author: XuShuai
 * @Date: 2025-05-11 16:10:02
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-11 16:24:14
 * @FilePath: src/components/common/styled/oneLineEllipsisMixin.ts
 */
export const oneLineEllipsisMixin = css<{ $maxWidth?: string }>`
  max-width: ${({$maxWidth}) => `${$maxWidth}`};
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
