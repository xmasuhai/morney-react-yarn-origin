import React from 'react'
import {useTags} from 'hooks/useTags'

type Props = {
  tagIds: number[]
}

/**
 * @Description: 记账记录标签名称
 * @Author: XuShuai
 * @Date: 2025-05-11 14:04:53
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-11 14:18:11
 * @FilePath: src/components/statistics/RecordTagNames.tsx
 */
export const RecordTagNames = ({tagIds}: Props) => {
  const {findTagName} = useTags()
  return (
    <ul className="tags">
      {
        tagIds
          .map((tagId, index, tagIds) => (
            <li key={tagId} className="tag">
              <span>
                {findTagName(tagId)}
                {/*
                {index === tagIds.length - 1 ? '' : '、'}
                */}
              </span>
            </li>
          ))
          .reduce(
            (result, span, index, array) =>
              result.concat(
                index < array.length - 1
                  ? [span, '、']
                  : [span]
              ),
            [] as React.ReactNode[]
          )
      }
    </ul>
  )
}
