import styled from 'styled-components'

/**
 * @Description: 备注模块样式
 * @Author: XuShuai
 * @Date: 2024-01-01 17:52:08
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-01-18 20:21:43
 * @FilePath: src/components/money/styled/NoteStyled.tsx
 */
export const NoteStyled = styled.section`
  background-color: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span { margin-right: 16px; white-space: nowrap; }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background-color: transparent;

    }
  }

`
