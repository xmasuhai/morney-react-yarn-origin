import React from 'react'
import {TagButtonStyled} from 'components/common/styled/TagButtonStyled'
import {CenterColumnBox} from 'components/common/styled/CenterColumnBox'
import {Space} from 'components/common/styled/Space'

/**
 * @Description: 新增标签
 * @Author: XuShuai
 * @Date: 2024-12-20 22:01:04
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-22 23:26:58
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
