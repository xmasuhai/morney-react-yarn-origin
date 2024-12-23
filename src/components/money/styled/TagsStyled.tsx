import styled from 'styled-components'

// noinspection CssUnusedSymbol
/**
 * @Description: 标签样式
 * @Author: XuShuai
 * @Date: 2024-01-01 17:38:20
 * @LastEditors: XuShuai
 * @LastEditTime: 2024-12-21 21:26:36
 * @FilePath: src/components/money/styled/TagsStyled.tsx
 */
export const TagsStyled = styled.section`
  // parent flex
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: #fff;
  padding: 12px 16px;

  > ol {
    margin: 0 -12px;

    > li {
      background-color: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      cursor: pointer;

      &.selected {
        background-color: #5a5a5a;
        color: #fff;
      }

    }
  }

  > button {
    background-color: unset;
    padding: 2px 4px;
    margin-top: 8px;
    border-bottom: 1px solid #333;
    color: #666;
    cursor: pointer;

  }
`
