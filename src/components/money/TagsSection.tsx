import styled from 'styled-components'
import React, { useState } from 'react'

const TagsStyled = styled.section`
  // parent flex
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  background-color: #fff;
  padding: 12px 16px;

  > ol {
    margin: 0 -12px;

    > li {
      background-color: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background-color: #5a5a5a;
        color: #fff;
      }

    }
  }

  > button {
    background-color: unset;
    padding: 2px 4px;
    margin-top: 8px;
    border-bottom: 1px solid #333;
    color: #666;

  }
`

/**
 * 标签 模块
 * */
export const Tags: React.FC = (props) => {
  /* 标签初始化 和 增删改功能 */
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行',])
  const onAddTag = () => {
    const newTagName = window.prompt('请输入新标签名称')
    if (newTagName !== null) {
      setTags([...tags, newTagName,])
    }
  }

  /* 标签选中功能 */
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  /**
   * 找出非当前点击的其他标签，即如果 tag 已被点击，就过滤出所有没有被点击的 tag，作为新的 selectedTags
   * 否则，添加当前点击的 tag 到 selectedTags
   **/
  const onToggleTag = (tag: string) => {
    const filteredTags = selectedTags.filter(t => t !== tag)
    const addedTags = [...selectedTags, tag]

    setSelectedTags(selectedTags.includes(tag) ? filteredTags : addedTags)

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
