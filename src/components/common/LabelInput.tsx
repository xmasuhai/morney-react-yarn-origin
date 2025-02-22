import React from 'react'
import {LabelInputStyled} from 'components/common/styled/LabelInputStyled'

type Props = {
  label: string
  ref: any
} & React.InputHTMLAttributes<HTMLInputElement>

/**
 * @Description: 标签输入框
 * @Author: XuShuai
 * @Date: 2025-02-22 20:58:01
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-22 22:38:46
 * @FilePath: src/components/common/LabelInput.tsx
 */
export const LabelInput: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props

  return (
    <LabelInputStyled>
      <span>{props.label}</span>
      {/*
      <input
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onBlur={props.onBlur}/>
      */}
      <input {...rest} />
    </LabelInputStyled>
  )
}
