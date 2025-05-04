import styled from 'styled-components'

// noinspection CssUnusedSymbol
/**
 * @Description: 支出收入样式
 * @Author: XuShuai
 * @Date: 2024-01-01 20:16:16
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-04 22:59:27
 * @FilePath: src/components/money/styled/CategoryStyled.tsx
 */
export const CategoryStyled = styled.section
  .attrs<{ $bgColor?: string }>((props) => ({
    $bgColor: props.$bgColor || '#c4c4c4',
  }))`
  font-size: 24px;

  > ul {
    display: flex;
    justify-content: center;
    background-color: ${
      (props) =>
        props.$bgColor
    };
    position: relative;

    > li {
      cursor: pointer;
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background-color: #333;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%; // 绝对定位 宽度设为100%
      }

    }
  }
`
