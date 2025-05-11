import {AccountRecordItem} from 'hooks/useRecords'
import {RecordStyled} from 'components/statistics/styled/RecordStyled'
import React from 'react'
import {RecordTagNames} from './RecordTagNames'

type Props = {
  records: AccountRecordItem[]
}

/**
 * @Description: 记账记录分组列表组件
 * @Author: XuShuai
 * @Date: 2025-05-11 12:40:07
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-11 14:09:36
 * @FilePath: src/components/statistics/RecordsGroupList.tsx
 */
export const RecordsGroupList = ({records}: Props) => {
  return <section>
    {
      records
        .map(record => (
          <RecordStyled key={record.createdAt}>
            {/* 标签 */}
            <RecordTagNames tagIds={record.tagIds}/>
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
}
