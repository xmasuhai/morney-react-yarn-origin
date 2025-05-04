import {useEffect, useState} from 'react'
import {createId} from 'lib/createId'
import {useUpdate} from './useUpdate'

export type TagObj = { id: number, name: string }

/**
 * @Description: 存储所有标签数据
 * @Author: XuShuai
 * @Date: 2024-01-03 06:52:17
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-04 15:23:41
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
    newName: string,
  ) => {
    setTags(
      tags
        .map(tag =>
          tag.id === id
            ? {...tag, name: newName}
            : tag
        )
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
    if(newTagName !== null && (newTagName.trim() !== '')) {
      const newTagList = [...tags, {id: createId(), name: newTagName},]
      setTags(newTagList)
    }
  }

  /**
   * 组件挂载时，初始化 tags 数据：读取 localStorage 中 tags
   */
  useEffect(() => {
    const tagsInStorage = JSON.parse(localStorage.getItem('tags') || '[]') as TagObj[]
    const localTags: TagObj[] = tagsInStorage?.length === 0
      ? [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ]
      : tagsInStorage
    setTags(localTags)
  }, [])

  /**
   * 持久化写入：监听tags变化，并更新 localStorage
   * 记录是否首次变化，作为判断是否需要设置 tags 数据的依据，避免首次渲染时，触发 setTags
   */
  useUpdate(
    () => {
      localStorage.setItem('tags', JSON.stringify(tags))
    },
    tags
  )

  return {
    tags,
    setTags,
    findTag,
    updateTagName,
    deleteTag,
    addTag,
  }
}
