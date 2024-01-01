import React, {useRef,} from 'react'
import {NoteStyled} from './styled/NoteStyled'

type Props = {
  noteValue: string,
  onNoteChange: (newNote: string) => void,
}

/**
 * 备注 模块
 * */
export const Note: React.FC<Props> = (props) => {
  /* 备注输入功能 */
  const noteValue = props.noteValue
  const inputRef = useRef<HTMLInputElement>(null)

  const changeNote = () => {
    if (!inputRef.current) { return }
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
          placeholder="在这里添加备注" />
      </label>
    </NoteStyled>
  )
}
