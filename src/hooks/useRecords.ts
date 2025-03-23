import {useEffect, useState} from 'react'
import {CategoryStr} from 'components/money/CategorySection'
import {useUpdate} from './useUpdate'

type AccountRecordItem = {
  tagIds: number[]
  note: string
  category: CategoryStr
  amount: number
}

/**
 * @Description: 记账记录逻辑
 * @Author: XuShuai
 * @Date: 2025-03-23 12:42:05
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-03-23 13:45:16
 * @FilePath: src/hooks/useRecords.ts
 */
export const useRecords = () => {
  const [records, setRecords] = useState<AccountRecordItem[]>([])

  const addRecord = (record: AccountRecordItem) => {
    setRecords([...records, record])
  }

  /** 挂载时，读取 localStorage 中的 records */
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
