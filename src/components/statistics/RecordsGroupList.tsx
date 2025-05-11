import {useTags} from 'hooks/useTags'
import {AccountRecordItem} from 'hooks/useRecords'
import {RecordStyled} from 'components/statistics/styled/RecordStyled'
import React from 'react'

type Props = {
  records: AccountRecordItem[]
}

/**
 * @Description: 记账记录分组列表组件
 * @Author: XuShuai
 * @Date: 2025-05-11 12:40:07
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-11 12:43:00
 * @FilePath: src/components/statistics/RecordsGroupList.tsx
 */
export const RecordsGroupList = ({records}: Props) => {
  const {findTagName} = useTags()
  return <section>
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
}
