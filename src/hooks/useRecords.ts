import {useEffect, useState} from 'react'
import {CategoryStr} from 'components/money/CategorySection'
import {useUpdate} from './useUpdate'

type AccountRecordItem = {
  tagIds: number[]
  note: string
  category: CategoryStr
  amount: number
  createdAt: string // ISO 8601
  // updatedAt: string
}

type AccountRecordItemOmitTime = Omit<AccountRecordItem, 'createdAt' | 'updatedAt'>

/**
 * @Description: 记账记录逻辑
 * @Author: XuShuai
 * @Date: 2025-03-23 12:42:05
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-04 18:09:16
 * @FilePath: src/hooks/useRecords.ts
 */
export const useRecords = () => {
  const [records, setRecords] = useState<AccountRecordItem[]>([])

  /** 添加记账记录，带有创建时间 */
  const addRecord = (newRecord: AccountRecordItemOmitTime) => {
    const record = {
      ...newRecord,
      createdAt: new Date().toISOString()
    }
    setRecords([...records, record])
  }

  /** 挂载时，从localStorage 中读取 records */
  useEffect(() => {
    setRecords(
      JSON.parse(window.localStorage.getItem('records') || '[]')
    )
  }, [])

  /** 监听 records 依赖变化，写入 localStorage */
  useUpdate(
    () => {
      window.localStorage.setItem(
        'records',
        JSON.stringify(records)
      )
    },
    [records,]
  )

  return {
    records,
    addRecord,
  }
}
