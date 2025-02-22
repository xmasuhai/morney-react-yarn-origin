import React from 'react'
import {useTags} from 'hooks/useTags'
import {useParams} from 'react-router-dom'
import {Layout} from 'components/Layout'
import {Icon} from 'components/Icon'
import {TagButtonStyled} from 'components/common/styled/TagButtonStyled'
import {TopBarStyled} from 'components/tags-edit/styled/TopBarStyled'

type Params = {
  id: string
}

/**
 * @Description: 标签编辑页面
 * @Author: XuShuai
 * @Date: 2024-01-05 05:57:36
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-22 21:47:40
 * @FilePath: src/views/TagEdit.tsx
 */
export const TagEdit: React.FC = () => {
  const {findTag} = useTags()
  const {id} = useParams<Params>()
  const tag = findTag(id)

  return (
    <Layout>
      <TopBarStyled>
        <Icon name="money-left"/>
        <h3 className="title">编辑标签</h3>
      </TopBarStyled>

      <section>
        <label>
          <span>标签名</span>
          <input
            type="text"
            placeholder={tag && tag.name}/>
        </label>
      </section>

      <section>
        <TagButtonStyled>删除</TagButtonStyled>
      </section>
    </Layout>
  )
}
