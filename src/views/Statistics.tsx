import React, {useState} from 'react'
import {Layout} from 'components/common/Layout'
import {CategorySection, CategoryStr} from 'components/money/CategorySection'
import {useRecords} from 'hooks/useRecords'
import {useTags} from 'hooks/useTags'
// import dayjs from 'dayjs'
import {RecordStyled} from 'components/statistics/styled/RecordStyled'

/**
 * @Description: 统计页面
 * @Author: XuShuai
 * @Date: 2025-02-22 21:40:25
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-07 06:05:30
 * @FilePath: src/views/Statistics.tsx
 */
export const Statistics = () => {
  const [category, setCategory] =
    useState<CategoryStr>('expenditure')
  const {records} = useRecords()
  const {findTagName} = useTags()
  const selectedRecords = records
    .filter(record => record.category === category)

  return (
    <Layout>
      <CategorySection
        categoryValue={category}
        onCategoryChange={value => setCategory(value)}
        bgColor="#fff"/>

      <section>
        {
          selectedRecords
            .map(record => (
              <RecordStyled key={record.createdAt}>
                {/* 标签 */}
                <ul className="tags">
                  {
                    record.tagIds
                      .map((tagId, index, tagIds) => (
                        <li key={tagId} className="tag">
                          <span>
                            {findTagName(tagId)}
                            {index === tagIds.length - 1 ? '' : '、'}
                          </span>
                        </li>
                      ))
                  }
                </ul>
                {/* 备注 */}
                {
                  record.note &&
                  <span className="note">{record.note}</span>
                }
                {/* 金额 */}
                <span className="amount">{record.amount}</span>

                {/*
                <span className="date">
                  {
                    dayjs(record.createdAt)
                      .format('YYYY-MM-DD')
                  }
                </span>
                */}
              </RecordStyled>
            ))
        }
      </section>

    </Layout>
  )
}
