import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {Icon} from './Icon'

const NavWrapper = styled.nav`
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

/**
 *
 * @Description:
 * @Author: XuShuai
 * @Date: 2023-12-07 06:18:36
 * @LastEditors: XuShuai
 * @LastEditTime: 2024-12-08 17:21:33
 * @FilePath: src/components/Nav.tsx
 */
export const Nav = () => (
  <NavWrapper>
    <ul>
      <li>
        <NavLink to="/tags" activeClassName="selected">
          <Icon name="bills"/>
          标签页
        </NavLink>
      </li>
      <li>
        <NavLink to="/money" activeClassName="selected">
          <Icon name="edit"/>
          记账页
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" activeClassName="selected">
          <Icon name="statistics"/>
          统计页
        </NavLink>
      </li>
    </ul>
  </NavWrapper>
)
