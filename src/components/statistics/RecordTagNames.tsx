import React from 'react'
import {useTags} from 'hooks/useTags'
import {
  RecordTagNamesStyled
} from 'components/statistics/styled/RecordTagNamesStyled'

type Props = {
  tagIds: number[]
}

/**
 * @Description: 记账记录标签名称
 * @Author: XuShuai
 * @Date: 2025-05-11 14:04:53
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-11 16:31:49
 * @FilePath: src/components/statistics/RecordTagNames.tsx
 */
export const RecordTagNames = ({tagIds}: Props) => {
  const {findTagName} = useTags()
  return (
    <RecordTagNamesStyled $maxWidth="3em">
      {
        tagIds
          .map((tagId, /* index, tagIds */) => (
            <li key={tagId} className="tag">
              <span className="names one-line">
                {findTagName(tagId)}
                {/*
                {index === tagIds.length - 1 ? '' : '、'}
                */}
              </span>
            </li>
          ))
          .reduce(
            (result, span, index, tagIds) =>
              result.concat(
                index < tagIds.length - 1
                  ? [span, '、']
                  : [span]
              ),
            [] as React.ReactNode[]
          )
      }
    </RecordTagNamesStyled>
  )
}
