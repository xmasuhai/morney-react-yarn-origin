import React, {useState} from 'react'
import {Layout} from 'components/common/Layout'
import {CategorySection, CategoryStr} from 'components/money/CategorySection'
import {AccountRecordItem, useRecords} from 'hooks/useRecords'
import dayjs from 'dayjs'
import {RecordsGroupList} from 'components/statistics/RecordsGroupList'
import {DateFormattedHeader} from 'components/statistics/DateFormattedHeader'

/**
 * @Description: 统计页面
 * @Author: XuShuai
 * @Date: 2025-02-22 21:40:25
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-11 13:21:18
 * @FilePath: src/views/Statistics.tsx
 */
export const Statistics = () => {
  const [category, setCategory] =
    useState<CategoryStr>('expenditure')
  const {records} = useRecords()
  const selectedRecords = records
    .filter(record => record.category === category)

  /**
   * 按日期分组记账记录
   * {'2025-05-01': [item, item], ...}
   */
  const recordsGroupByDate: Partial<Record<string, AccountRecordItem[]>> =
    Object.groupBy(selectedRecords, record =>
      dayjs(record.createdAt).format('YYYY-MM-DD')
    )

  // 按日期排序后的记账记录组
  const sortedRecordsGroup = Object.entries(recordsGroupByDate)
    .sort((
      [datePrev,],
      [dateNext,]
    ) => {
      const cases = [
        [
          () => dayjs(datePrev).isBefore(dayjs(dateNext)),
          () => 1,
        ],
        [
          () => dayjs(datePrev).isAfter(dayjs(dateNext)),
          () => -1,
        ],
      ] as const

      const [, resultFn] =
      cases
        .find((
          [conditionFn,],
        ) => conditionFn()) ||
      [() => true, () => 0]

      return resultFn()

    })

  return (
    <Layout>
      <CategorySection
        categoryValue={category}
        onCategoryChange={value => setCategory(value)}
        bgColor="#fff"/>
      {
        sortedRecordsGroup
          .map(([date, records = []],) => (
            <section key={date}>
              <DateFormattedHeader date={date}/>
              <RecordsGroupList records={records}/>
            </section>
          ))
      }
    </Layout>
  )
}
