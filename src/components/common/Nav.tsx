import {NavLink} from 'react-router-dom'
import {Icon} from 'components/common/Icon'
import {NavStyled} from 'components/common/styled/NavStyled'

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
 * @LastEditTime: 2025-02-23 20:03:40
 * @FilePath: src/components/Nav.tsx
 */
export const Nav = () => (
  <NavStyled>
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
  </NavStyled>
)
