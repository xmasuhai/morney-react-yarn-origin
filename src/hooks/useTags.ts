import {useState} from 'react'

export type TagObj = {id: number, name: string}

/**
 * @Description: 存储所有标签数据
 * @Author: XuShuai
 * @Date: 2024-01-03 06:52:17
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-16 21:50:24
 * @FilePath: src/hooks/useTags.ts
 */
export const useTags = () => {
  const [tags, setTags] = useState<TagObj[]>(
    [
      {id: 1, name: '衣'},
      {id: 2, name: '食'},
      {id: 3, name: '住'},
      {id: 4, name: '行'},
    ]
  )

  return {
    tags,
    setTags
  }
}
