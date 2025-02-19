import {useState} from 'react'
import {createId} from 'lib/createId'

export type TagObj = {id: number, name: string}

/**
 * @Description: 存储所有标签数据
 * @Author: XuShuai
 * @Date: 2024-01-03 06:52:17
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-19 16:10:28
 * @FilePath: src/hooks/useTags.ts
 */
export const useTags = () => {
  const [tags, setTags] = useState<TagObj[]>(
    [
      {id: createId(), name: '衣'},
      {id: createId(), name: '食'},
      {id: createId(), name: '住'},
      {id: createId(), name: '行'},
    ]
  )

  return {
    tags,
    setTags
  }
}
