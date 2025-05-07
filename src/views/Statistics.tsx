import React, {useState} from 'react'
import {Layout} from 'components/common/Layout'
import {CategorySection, CategoryStr} from 'components/money/CategorySection'
import {AccountRecordItem, useRecords} from 'hooks/useRecords'
import {useTags} from 'hooks/useTags'
import dayjs from 'dayjs'
import {RecordStyled} from 'components/statistics/styled/RecordStyled'

/**
 * @Description: 统计页面
 * @Author: XuShuai
 * @Date: 2025-02-22 21:40:25
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-08 07:08:12
 * @FilePath: src/views/Statistics.tsx
 */
export const Statistics = () => {
  const [category, setCategory] =
    useState<CategoryStr>('expenditure')
  const {records} = useRecords()
  const {findTagName} = useTags()
  const selectedRecords = records
    .filter(record => record.category === category)

  // 桶排序实现按日期分组
  /*
    {'2025-05-01': [item, item], '2025-05-02': [item, item], '2025-05-03': [item, item, item]}
  */
  const bucketHash: Record<string, AccountRecordItem[]> = {}
  selectedRecords
    .forEach(record => {
      const key = dayjs(record.createdAt).format('YYYY-MM-DD')

      if(!(key in bucketHash)) {bucketHash[key] = []}
      bucketHash[key].push(record)
    })

  const bucketList = Object.entries(bucketHash)
    .sort((a, b) => {
      if(a[0] === b[0]) {return 0}
      if(a[0] > b[0]) {return -1}
      if(a[0] < b[0]) {return 1}
      return 0
    })

  return (
    <Layout>
      <CategorySection
        categoryValue={category}
        onCategoryChange={value => setCategory(value)}
        bgColor="#fff"/>
      {
        bucketList
          .map(([date, records],) => (
            <section key={date}>
              <h3>{date}</h3>
              <section>
                {
                  records
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

                      </RecordStyled>
                    ))
                }
              </section>
            </section>
          ))
      }

    </Layout>
  )
}
