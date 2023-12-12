import styled from 'styled-components'
import {Link} from 'react-router-dom'
/*
// eslint-disable-next-line
import tag from 'assets/icons/bills.svg' // svgo-loader -> svg-sprite-loader
// eslint-disable-next-line
import edit from 'assets/icons/edit.svg'
// eslint-disable-next-line
import statistics from 'assets/icons/statistics.svg'
// console.log(tag, edit, statistics,)
import 'assets/icons/bills.svg'
import 'assets/icons/edit.svg'
import 'assets/icons/statistics.svg'
*/

require('assets/icons/bills.svg')
require('assets/icons/edit.svg')
require('assets/icons/statistics.svg')

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.333%;
      text-align: center;
      padding: 4px 0 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      .icon {
        width: 24px;
        height: 24px;
      }
      
    }
  }
`

export const Nav = () => (
  <NavWrapper>
    <ul>
      <li>
        <svg className="icon">
          <use xlinkHref="#bills"></use>
        </svg>
        <Link to="/tags">标签页</Link>
      </li>
      <li>
        <svg className="icon">
          <use xlinkHref="#edit"></use>
        </svg>
        <Link to="/money">记账页</Link>
      </li>
      <li>
        <svg className="icon">
          <use xlinkHref="#statistics"></use>
        </svg>
        <Link to="/statistics">统计页</Link>
      </li>
    </ul>
  </NavWrapper>
)
