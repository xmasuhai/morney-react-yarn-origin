import styled from 'styled-components'

/**
 * @Description: 标签输入框样式
 * @Author: XuShuai
 * @Date: 2025-02-22 21:00:39
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-22 23:20:09
 * @FilePath: src/components/common/styled/LabelInputStyled.tsx
 */
export const LabelInputStyled = styled.label`
  display: flex;
  align-items: center;

  > span {margin-right: 16px; white-space: nowrap;}

  > input {
    display: block;
    width: 100%;
    height: 44px;
    background-color: transparent;
  }
`
