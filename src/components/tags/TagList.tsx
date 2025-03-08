import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'components/common/Icon'
import {TagsStyled} from 'components/tags/styled/TagsStyled'
import {TagObj} from 'hooks/useTags'

interface TagListProps {
  tags: TagObj[]
}

/**
 * @Description: 标签列表
 * @Author: XuShuai
 * @Date: 2024-12-20 21:55:25
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-03-08 20:47:02
 * @FilePath: src/components/tags/TagList.tsx
 */
export const TagList: React.FC<TagListProps> = ({tags}) => {
  return (
    <TagsStyled>
      {tags.map(tag => (
        <li key={tag.id}>
          <Link to={'/tags/' + tag.id}>
            <span
              className="one-line">
              {tag.name}
            </span>
            <Icon name="money_right"/>
          </Link>
        </li>
      ))}
    </TagsStyled>
  )
}
