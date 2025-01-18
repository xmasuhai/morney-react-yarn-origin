import React, {useRef,} from 'react'
import {NoteStyled} from './styled/NoteStyled'

type Props = {
  noteValue: string,
  onNoteChange: (newNote: string) => void,
}

/**
 * @Description: 备注模块
 * @Author: XuShuai
 * @Date: 2023-12-19 05:42:17
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-01-18 20:31:59
 * @FilePath: src/components/money/NoteSection.tsx
 */
export const NoteSection: React.FC<Props> = (props) => {
  const noteValue = props.noteValue
  const inputRef =
    useRef<HTMLInputElement>(null)

  /* 备注输入功能 */
  const changeNote = () => {
    if(!inputRef.current) { return }
    props.onNoteChange(inputRef.current.value)
  }

  return (
    <NoteStyled>
      <label>
        <span>备注</span>
        <input
          type="text"
          ref={inputRef}
          defaultValue={noteValue}
          onBlur={changeNote}
          placeholder="在这里添加备注"/>
      </label>
    </NoteStyled>
  )
}
