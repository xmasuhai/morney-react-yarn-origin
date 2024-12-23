import React, {useRef,} from 'react'
import {NoteStyled} from './styled/NoteStyled'

type Props = {
  noteValue: string,
  onNoteChange: (newNote: string) => void,
}

/**
 * @Description: 备注 模块
 * @Author: XuShuai
 * @Date: 2023-12-19 05:42:17
 * @LastEditors: XuShuai
 * @LastEditTime: 2024-12-21 21:28:36
 * @FilePath: src/components/money/NoteSection.tsx
 */
export const Note: React.FC<Props> = (props) => {
  /* 备注输入功能 */
  const noteValue = props.noteValue
  const inputRef = useRef<HTMLInputElement>(null)

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
