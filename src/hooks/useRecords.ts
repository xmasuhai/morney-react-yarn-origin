import {useEffect, useState} from 'react'
import {CategoryStr} from 'components/money/CategorySection'
import {useUpdate} from './useUpdate'

export type AccountRecordItem = {
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
 * @LastEditTime: 2025-05-08 06:24:51
 * @FilePath: src/hooks/useRecords.ts
 */
export const useRecords = () => {
  const [records, setRecords] = useState<AccountRecordItem[]>([])

  /** 验证记账记录，非法则用户提示信息，并返回验证结果 */
  const checkValidateRecord = (record: AccountRecordItemOmitTime) => {
    const {tagIds, /*note, category,*/ amount} = record
    if(!tagIds.length) {
      window.alert('请选择标签')
      return false
    }
    if(amount === 0) {
      window.alert('请输入金额')
      return false
    }
    return true
  }

  /** 添加记账记录，带有创建时间 */
  const addRecord = (newRecord: AccountRecordItemOmitTime) => {
    if(!checkValidateRecord(newRecord)) {return 'failure'}

    const record = {
      ...newRecord,
      createdAt: new Date().toISOString()
    }
    setRecords([...records, record])

    return 'success'
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
