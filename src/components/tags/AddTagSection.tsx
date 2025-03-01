import React from 'react'
import {TagButtonStyled} from 'components/common/styled/TagButtonStyled'
import {CenterColumnBox} from 'components/common/styled/CenterColumnBox'
import {Space} from 'components/common/styled/Space'

type Props = {
  onChange: () => void
}

/**
 * @Description: 新增标签
 * @Author: XuShuai
 * @Date: 2024-12-20 22:01:04
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-03-01 12:53:16
 * @FilePath: src/components/tags/AddTagSection.tsx
 */
export const AddTagSection: React.FC<Props> = (props) => {
  return (
    <CenterColumnBox>
      <Space/>
      <TagButtonStyled
        onClick={props.onChange}>
        新增标签
      </TagButtonStyled>
      <Space/>
    </CenterColumnBox>
  )
}
