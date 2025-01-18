import React, {useState} from 'react'
import {CategoryStyled} from './styled/CategoryStyled'

export type CategoryStr = 'income' | 'expenditure'

type Props = {
  categoryValue: string;
  onCategoryChange: (category: CategoryStr) => void;
}

/**
 * @Description: 收支切换 模块
 * @Author: XuShuai
 * @Date: 2023-12-19 05:42:33
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-01-18 22:05:13
 * @FilePath: src/components/money/CategorySection.tsx
 */
export const CategorySection: React.FC<Props> = (props) => {
  const categoryMap =
    {'income': '收入', 'expenditure': '支出',} as const
  
  /* tab按钮 内容数组 */
  const [categoryList,] = useState(['expenditure', 'income',] as const)

  /* 切换 收入/支出 功能 */
  const categoryValue = props.categoryValue
  const onCategoryChange = props.onCategoryChange

  // 选中样式
  const getSelectedCategoryClass = (
    categoryStr: CategoryStr
  ) => categoryValue === categoryStr ? 'selected' : ''

  return (
    <CategoryStyled>
      <ul>
        {categoryList.map(categoryStr => (
          <li
            key={categoryStr}
            className={getSelectedCategoryClass(categoryStr)}
            onClick={() => {onCategoryChange(categoryStr)}}>
            {categoryMap[categoryStr]}
          </li>
        ))}
      </ul>
    </CategoryStyled>
  )
}
