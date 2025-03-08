import {useEffect, useRef, useState} from 'react'
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
 * @LastEditTime: 2025-03-08 16:43:39
 * @FilePath: src/hooks/useTags.ts
 */
export const useTags = () => {
  const [tags, setTags] = useState<TagObj[]>([])

  /** 根据给定id查找tag */
  const findTag = (id: string) => {
    return tags.find(tag => `${tag.id}` === id)
  }

  /** 更新标签名称 */
  const updateTagName = (
    id: number,
    name: string,
  ) => {
    setTags(tags
      .map(tag => tag.id === id ? {...tag, name} : tag)
    )
  }

  /** 删除标签标 */
  const deleteTag = (id: number) => {
    setTags(tags
      .filter(tag => tag.id !== id)
    )
  }

  /** 添加标签 */
  const addTag = () => {
    const newTagName = window.prompt('请输入新标签名称')
    if(newTagName !== null) {
      const newTagList = [...tags, {id: createId(), name: newTagName},]
      setTags(newTagList)
    }
  }

  /** 记录是否首次变化，作为判断是否需要设置 tags 数据的一句，避免首次渲染时，触发 setTags */
  const count = useRef(0)
  useEffect(() => {
    count.current++
  })

  /** 渲染时，读取 localStorage 中 tags */
  useEffect(() => {
    const localTags = JSON.parse(localStorage.getItem('tags') || '[]')
    setTags(localTags)
  }, [])

  /** 持久化写入：监听 tags 变化 并更新 localStorage */
  useEffect(() => {
    if(count.current <= 1) {return}
    localStorage.setItem('tags', JSON.stringify(tags))

    console.log('tags changed_______________________')
    console.log('=>(useTags.ts:74) tags', tags)
    console.log('_______________________tags changed')
  }, [tags])

  return {
    tags,
    setTags,
    findTag,
    updateTagName,
    deleteTag,
    addTag,
  }
}
