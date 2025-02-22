import React from 'react'
import {CenterColumnBox, Space} from 'components/tags/styled/TagsStyled'
import {TagButtonStyled} from 'components/common/styled/TagButtonStyled'

/**
 * @Description: 新增标签
 * @Author: XuShuai
 * @Date: 2024-12-20 22:01:04
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-22 21:33:33
 * @FilePath: src/components/tags/AddTagSection.tsx
 */
export const AddTagSection: React.FC = () => {
  return (
    <CenterColumnBox>
      <Space/>
      <TagButtonStyled>新增标签</TagButtonStyled>
      <Space/>
    </CenterColumnBox>
  )
}
