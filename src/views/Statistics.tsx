import React, {useState} from 'react'
import {Layout} from 'components/common/Layout'
import {CategorySection, CategoryStr} from '../components/money/CategorySection'
import {useRecords} from '../hooks/useRecords'
import {useTags} from '../hooks/useTags'
import dayjs from 'dayjs'

/**
 * @Description: 统计页面
 * @Author: XuShuai
 * @Date: 2025-02-22 21:40:25
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-07 05:15:57
 * @FilePath: src/views/Statistics.tsx
 */
export const Statistics = () => {
  const [category, setCategory] =
    useState<CategoryStr>('expenditure')
  const {records} = useRecords()
  const {findTagName} = useTags()

  return (
    <Layout>
      <CategorySection
        categoryValue={category}
        onCategoryChange={value => setCategory(value)}
        bgColor="#fff"/>

      <div>
        {
          records
            .map(record => (
              <div key={record.createdAt}>
                {
                  record.tagIds
                    .map((tagId, index, tagIds) => (
                      <span key={tagId}>
                        {findTagName(tagId)}
                        {index === tagIds.length - 1 ? '' : '、'}
                      </span>
                    ))
                }
                <hr/>
                <p>{record.amount}</p>
                <hr/>
                <p>{dayjs(record.createdAt).format('YYYY-MM-DD')}</p>
              </div>
            ))
        }
      </div>

    </Layout>
  )
}
