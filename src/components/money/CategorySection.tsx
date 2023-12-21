import styled from 'styled-components'
import React, {useState} from 'react'

export const CategorySectionStyled = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    justify-content: center;
    background-color: #c4c4c4;
    position: relative;

    > li {
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
        width: 100%;
      }

    }
  }
`

/**
 * 收支切换 模块
 * */
export const CategorySection: React.FC = () => {
  const categoryMap = {'income': '支出', 'expenditure': '收入',}
  /* tab按钮 内容数组 */
  const [categoryList,] = useState(['income', 'expenditure',] as const)

  /* 切换 收入/支出 功能 */
  const [category, setCategory] = useState('income')

  return (
    <CategorySectionStyled>
      <ul>
        {categoryList.map(categoryStr => (
          <li
            className={category === categoryStr ? 'selected' : ''}
            onClick={() => {setCategory(categoryStr)}}>
            {categoryMap[categoryStr]}
          </li>
        ))}
      </ul>
    </CategorySectionStyled>
  )
}
