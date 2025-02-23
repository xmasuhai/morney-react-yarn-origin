import styled from 'styled-components'

/**
 * @Description: 导航组件样式
 * @Author: XuShuai
 * @Date: 2025-02-23 20:02:36
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-23 20:03:21
 * @FilePath: src/components/common/styled/NavStyled.tsx
 */
export const NavStyled = styled.nav`
  background-color: #fff;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.333%;
      text-align: center;

      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4px 0 0;

        &.selected {
          color: #f60;

          svg {fill: #f60;}
        }

      }

    }
  }
`
