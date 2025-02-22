import React from 'react'
import {LabelInputStyled} from 'components/common/styled/LabelInputStyled'

type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

/**
 * @Description: 标签输入框
 * @Author: XuShuai
 * @Date: 2025-02-22 20:58:01
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-22 22:45:26
 * @FilePath: src/components/common/LabelInput.tsx
 */
export const LabelInput: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props

  return (
    <LabelInputStyled>
      <span>{props.label}</span>
      <input {...rest} />
    </LabelInputStyled>
  )
}
