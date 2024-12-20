import React from 'react'
import {AddTagButton, CenterColumnBox, Space} from 'components/tags/styled/TagsStyled'

/**
 * @Description: 新增标签
 * @Author: XuShuai
 * @Date: 2024-12-20 22:01:04
 * @LastEditors: XuShuai
 * @LastEditTime: 2024-12-20 22:07:52
 * @FilePath: src/components/tags/AddTagSection.tsx
 */
export const AddTagSection: React.FC = () => {
  return (
    <CenterColumnBox>
      <Space/>
      <AddTagButton>新增标签</AddTagButton>
      <Space/>
    </CenterColumnBox>
  )
}
