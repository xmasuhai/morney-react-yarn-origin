import React from 'react'
import {TagsStyled} from './styled/TagsStyled'
import {useTags} from './hooks/useTags'

type Props = {
  selectedTags: string[];
  onSelectTagsChange: (newTags: string[]) => void
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
      setTags([...tags, newTagName,])
    }
  }

  /* 标签选中功能 */
  const selectedTags = props.selectedTags

  /**
   * 找出非当前点击的其他标签，即如果 tag 已被点击，就过滤出所有没有被点击的 tag，作为新的 selectedTags
   * 否则，添加当前点击的 tag 到 selectedTags
   **/
  const onToggleTag = (tag: string) => {
    const filteredTags = selectedTags.filter(t => t !== tag)
    const addedTags = [...selectedTags, tag]

    // 触发父组件的事件
    props.onSelectTagsChange(selectedTags.includes(tag) ? filteredTags : addedTags)

  }

  /* 获取选中标签的样式 */
  const getSelectedClass = (tag: string) => selectedTags.includes(tag) ? 'selected' : ''

  return (
    <TagsStyled>
      <ol>
        {
          tags.map((tag) => (
            <li
              key={tag}
              onClick={() => onToggleTag(tag)}
              className={getSelectedClass(tag)}>
              {tag}
            </li>
          ))
        }
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </TagsStyled>
  )
}
