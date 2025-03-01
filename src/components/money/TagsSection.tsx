import React from 'react'
import {TagsStyled} from './styled/TagsStyled'
import {useTags} from 'hooks/useTags'

type Props = {
  selectedTagIds: number[];
  onSelectTagIdsChange: (newTagIds: number[]) => void
}

/**
 * @Description: 标签模块
 * @Author: XuShuai
 * @Date: 2023-12-19 05:42:04
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-03-01 13:13:45
 * @FilePath: src/components/money/TagsSection.tsx
 */
export const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags()

  /* 标签选中功能，父组件传参已选中的标签id列表 */
  const selectedTagIds = props.selectedTagIds

  /**
   * 切换选中tag
   * 找出非当前点击的其他标签，
   * 即如果 tag 已被点击选中，就过滤出（复制出）所有没有被点击的 tag，作为新的 selectedTags
   * 否则，添加当前点击的 tag 到 selectedTags
   */
  const onToggleTag = (tagId: number) => {
    const filteredTagIds = selectedTagIds
      .filter(t => t !== tagId)
    const addedTagIds = [...selectedTagIds, tagId]

    // 触发父组件的事件
    props.onSelectTagIdsChange(
      selectedTagIds.includes(tagId)
        ? filteredTagIds
        : addedTagIds
    )

  }

  /** 获取选中标签的样式 */
  const getSelectedClass =
    (tagId: number) =>
      selectedTagIds.includes(tagId) ? 'selected' : ''

  return (
    <TagsStyled>
      <ol>
        {
          tags.map((tag) => (
            <li
              key={tag.id}
              onClick={() => onToggleTag(tag.id)}
              className={getSelectedClass(tag.id)}>
              {tag.name}
            </li>
          ))
        }
      </ol>
      <button onClick={addTag}>
        新增标签
      </button>
    </TagsStyled>
  )
}
