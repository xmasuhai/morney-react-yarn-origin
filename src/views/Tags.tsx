import React from 'react'
import {Layout} from 'components/Layout'
import {useTags} from 'components/money/hooks/useTags'
import {AddTagButton, CenterColumnBox, Space, TagsStyled} from 'views/styled/TagsStyled'
import {Icon} from 'components/Icon'
import {Link} from 'react-router-dom'

// 标签页面
export function Tags() {
  const {tags, /*setTags*/} = useTags()

  return (
    <Layout>
      <TagsStyled>
        {tags.map(tag => (
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
            <span
              className="one-line">{tag.name}</span>
              <Icon name="money_right"/>
            </Link>
          </li>
        ))}
      </TagsStyled>
      <CenterColumnBox>
        <Space/>
        <AddTagButton>新增标签</AddTagButton>
        <Space/>
      </CenterColumnBox>
    </Layout>
  )
}
