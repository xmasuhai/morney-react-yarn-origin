import {useState} from 'react'

export type TagObj = {id: number, name: string}

/**
 * @Description:
 * @Author: XuShuai
 * @Date: 2024-01-03 06:52:17
 * @LastEditors: XuShuai
 * @LastEditTime: 2024-12-20 21:59:58
 * @FilePath: src/components/money/hooks/useTags.tsx
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

  return {tags, setTags}
}
