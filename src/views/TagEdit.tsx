import React from 'react'
import {useTags} from 'hooks/useTags'
import {useParams} from 'react-router-dom'
import {Layout} from 'components/Layout'
import {Icon} from 'components/Icon'
import {TagButtonStyled} from 'components/common/styled/TagButtonStyled'
import {TopBarStyled} from 'components/tags-edit/styled/TopBarStyled'
import {LabelInput} from '../components/common/LabelInput'
import {LabelStyled} from '../components/tags-edit/styled/LabelStyled'
import {CenterColumnBox} from '../components/common/styled/CenterColumnBox'
import {Space} from '../components/common/styled/Space'

type Params = {
  id: string
}

/**
 * @Description: 标签编辑页面
 * @Author: XuShuai
 * @Date: 2024-01-05 05:57:36
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-22 23:29:28
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

      <LabelStyled>
        <LabelInput
          label="标签名"
          placeholder={tag && tag.name}/>
      </LabelStyled>

      <CenterColumnBox>
        <Space/>
        <TagButtonStyled>
          删除标签
        </TagButtonStyled>
      </CenterColumnBox>
    </Layout>
  )
}
