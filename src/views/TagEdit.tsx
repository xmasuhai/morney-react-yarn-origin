import React, {ChangeEventHandler} from 'react'
import {TagObj, useTags} from 'hooks/useTags'
import {useParams} from 'react-router-dom'
import {Layout} from 'components/common/Layout'
import {Icon} from 'components/common/Icon'
import {LabelInput} from 'components/common/LabelInput'
import {TagButtonStyled} from 'components/common/styled/TagButtonStyled'
import {TopBarStyled} from 'components/tags-edit/styled/TopBarStyled'
import {LabelStyled} from 'components/tags-edit/styled/LabelStyled'
import {CenterColumnBox} from 'components/common/styled/CenterColumnBox'
import {Space} from 'components/common/styled/Space'

type Params = {
  id: string
}

/**
 * @Description: 标签编辑页面
 * @Author: XuShuai
 * @Date: 2024-01-05 05:57:36
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-23 22:06:16
 * @FilePath: src/views/TagEdit.tsx
 */
export const TagEdit: React.FC = () => {
  const {
    findTag,
    updateTagName,
    deleteTag
  } = useTags()
  const {id: idString} = useParams<Params>()
  const tag = findTag(idString)
  const changeTagName: ChangeEventHandler<HTMLInputElement> = (e) => {
    if(!tag || !tag?.id) {return}
    updateTagName(tag.id, e.target.value || '')
  }

  const TagContent = (tag: TagObj) => (
    <LabelInput
      type="text"
      label="标签名"
      value={tag && tag.name}
      onChange={changeTagName}
      placeholder="请输入标签名"/>
  )

  const EmptyContent = () => (
    <CenterColumnBox>
      tag 不存在
    </CenterColumnBox>
  )

  return (
    <Layout>
      <TopBarStyled>
        <Icon name="money-left"/>
        <h3 className="title">
          编辑标签
        </h3>
      </TopBarStyled>

      <LabelStyled>
        {tag ? TagContent(tag) : EmptyContent()}
      </LabelStyled>

      <CenterColumnBox>
        <Space/>
        <TagButtonStyled
          onClick={() => tag && deleteTag(tag.id)}>
          删除标签
        </TagButtonStyled>
      </CenterColumnBox>
    </Layout>
  )
}
