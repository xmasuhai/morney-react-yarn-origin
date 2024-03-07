import React from 'react'
import {TagsStyled} from './styled/TagsStyled'
import {useTags} from './hooks/useTags'

type Props = {
  selectedTags: number[];
  onSelectTagsChange: (newTagIds: number[]) => void
}

/**
 * 标签 模块
 * */
export const Tags: React.FC<Props> = (props) => {
  /* 标签初始化 和 增删改功能 */
  const {tags, setTags} = useTags()

  const onAddTag = () => {
    const newTagName = window.prompt('请输入新标签名称')
    if(newTagName !== null) {
      // 暂时使用随机数作为 id

      setTags([...tags, {id: Math.random(), name: newTagName},])
    }
  }

  /* 标签选中功能 */
  const selectedTagIds = props.selectedTags

  /**
   * 切换选中tag
   * 找出非当前点击的其他标签，即如果 tag 已被点击，就过滤出所有没有被点击的 tag，作为新的 selectedTags
   * 否则，添加当前点击的 tag 到 selectedTags
   **/
  const onToggleTag = (tagId: number) => {
    const filteredTagIds = selectedTagIds.filter(t => t !== tagId)
    const addedTagIds = [...selectedTagIds, tagId]

    // 触发父组件的事件
    props.onSelectTagsChange(selectedTagIds.includes(tagId) ? filteredTagIds : addedTagIds)

  }

  /* 获取选中标签的样式 */
  const getSelectedClass = (tagId: number) =>
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
      <button onClick={onAddTag}>新增标签</button>
    </TagsStyled>
  )
}
