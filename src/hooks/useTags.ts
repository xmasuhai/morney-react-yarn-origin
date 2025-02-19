import {useState} from 'react'
import {createId} from 'lib/createId'

export type TagObj = {id: number, name: string}

const defaultTags: TagObj[] = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
]

/**
 * @Description: 存储所有标签数据
 * @Author: XuShuai
 * @Date: 2024-01-03 06:52:17
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-19 20:29:03
 * @FilePath: src/hooks/useTags.ts
 */
export const useTags = () => {
  const [tags, setTags] = useState<TagObj[]>(defaultTags)

  /** 根据给定id查找tag */
  const findTag = (id: string) => {
    return tags.find(tag => `${tag.id}` === id)
  }

  return {
    tags,
    setTags,
    findTag
  }
}
