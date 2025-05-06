import {useEffect, useState} from 'react'
import {createId} from 'lib/createId'
import {useUpdate} from './useUpdate'

export type TagObj = { id: number, name: string }

const genDefaultTags: () => TagObj[] = () => [
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
 * @LastEditTime: 2025-05-07 04:56:02
 * @FilePath: src/hooks/useTags.ts
 */
export const useTags = () => {
  const [tags, setTags] = useState<TagObj[]>([])

  /**
   * 组件挂载时，初始化 tags 数据：读取 localStorage 中 tags
   * 任何使用当前组件都会执行两次本挂载逻辑
   */
  useEffect(() => {
    const tagsInStorage = JSON.parse(localStorage.getItem('tags') || '[]') as TagObj[]
    // 防止tags重名
    const localTags: TagObj[] = tagsInStorage?.length === 0
      ? genDefaultTags()
      : tagsInStorage
    setTags(localTags)
  }, [])

  /**
   * 持久化写入：监听tags变化，并更新 localStorage
   * 记录是否首次变化，作为判断是否需要设置 tags 数据的依据，避免首次渲染时，触发 setTags
   */
  useUpdate(() => {
    localStorage.setItem('tags', JSON.stringify(tags))
  }, tags,)

  /** 根据给定id查找tag */
  const findTag = (id: string) => {
    return tags.find(tag => `${tag.id}` === id)
  }

  /** 通过id 获取标签名称 */
  const findTagName = (id: number) =>
    tags.find(tag => tag.id === id)?.name || ''

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
    // 用户输入有效字符串
    if(newTagName !== null && (newTagName.trim() !== '')) {
      const newTagList = [
        ...tags,
        // 自增id
        {id: createId(), name: newTagName,},
      ]
      setTags(newTagList)
    }
  }

  return {
    tags,
    setTags,
    findTag,
    findTagName,
    updateTagName,
    deleteTag,
    addTag,
  }
}
