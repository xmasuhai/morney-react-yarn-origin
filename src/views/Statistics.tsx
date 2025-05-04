import React, {useState} from 'react'
import {Layout} from 'components/common/Layout'
import {CategorySection, CategoryStr} from '../components/money/CategorySection'

/**
 * @Description: 统计页面
 * @Author: XuShuai
 * @Date: 2025-02-22 21:40:25
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-04 22:58:58
 * @FilePath: src/views/Statistics.tsx
 */

// 统计页面
export function Statistics() {
  const [category, setCategory] =
    useState<CategoryStr>('expenditure')

  return (
    <Layout>
      <CategorySection
        categoryValue={category}
        onCategoryChange={value => setCategory(value)}
        bgColor="#fff"/>
    </Layout>
  )
}
