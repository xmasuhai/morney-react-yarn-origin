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

const navList = [
  {
    name: 'bills',
    to: '/tags',
    label: '标签页',
  },
  {
    name: 'edit',
    to: '/money',
    label: '记账页',
  },
  {
    name: 'statistics',
    to: '/statistics',
    label: '统计页',
  },
]

/**
 *
 * @Description:
 * @Author: XuShuai
 * @Date: 2023-12-07 06:18:36
 * @LastEditors: XuShuai
 * @LastEditTime: 2024-12-21 20:14:31
 * @FilePath: src/components/Nav.tsx
 */
export const Nav = () => (
  <NavWrapper>
    <ul>
      {
        navList.map(navItem => (
          <li key={navItem.name}>
            <NavLink
              to={navItem.to}
              activeClassName="selected">
              <Icon name={navItem.name}/>
              {navItem.label}
            </NavLink>
          </li>
        ))
      }
    </ul>
  </NavWrapper>
)
