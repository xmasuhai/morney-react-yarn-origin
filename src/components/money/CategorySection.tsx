import React, {useState} from 'react'
import {CategoryStyled} from './styled/CategoryStyled'

export type CategoryStr = 'income' | 'expenditure'

type Props = {
  categoryValue: string;
  onCategoryChange: (category: CategoryStr) => void;
}

/**
 * 收支切换 模块
 * */
export const Category: React.FC<Props> = (props) => {
  const categoryMap = {'income': '支出', 'expenditure': '收入',}
  /* tab按钮 内容数组 */
  const [categoryList,] = useState(['income', 'expenditure',] as const)

  /* 切换 收入/支出 功能 */
  const categoryValue = props.categoryValue
  const onCategoryChange = props.onCategoryChange

  return (
    <CategoryStyled>
      <ul>
        {categoryList.map(categoryStr => (
          <li
            key={categoryStr}
            className={categoryValue === categoryStr ? 'selected' : ''}
            onClick={() => {onCategoryChange(categoryStr)}}>
            {categoryMap[categoryStr]}
          </li>
        ))}
      </ul>
    </CategoryStyled>
  )
}
