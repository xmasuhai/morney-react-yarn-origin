import React, {useState} from 'react'
import {CategoryStyled} from './styled/CategoryStyled'

export type CategoryStr = 'income' | 'expenditure'

type Props = {
  categoryValue: string;
  onCategoryChange: (category: CategoryStr) => void;
  bgColor?: '#c4c4c4' | '#fff'
}

/**
 * @Description: 收支切换 模块
 * @Author: XuShuai
 * @Date: 2023-12-19 05:42:33
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-04 23:05:35
 * @FilePath: src/components/money/CategorySection.tsx
 */
export const CategorySection: React.FC<Props> = (
  {
    categoryValue,
    onCategoryChange,
    bgColor,
  }
) => {
  const categoryMap =
    {'income': '收入', 'expenditure': '支出',} as const

  const categoryList = ['expenditure', 'income',] as const

  // 选中样式
  const getSelectedCategoryClass = (
    categoryStr: CategoryStr
  ) => categoryValue === categoryStr ? 'selected' : ''

  return (
    <CategoryStyled $bgColor={bgColor}>
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
