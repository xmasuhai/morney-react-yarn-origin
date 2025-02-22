import React, {ChangeEventHandler,} from 'react'
import {NoteStyled} from 'components/money/styled/NoteStyled'
import {LabelInput} from 'components/common/LabelInput'

type Props = {
  noteValue: string,
  onNoteChange: (newNote: string) => void,
}

/**
 * @Description: 备注模块
 * @Author: XuShuai
 * @Date: 2023-12-19 05:42:17
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-22 23:06:30
 * @FilePath: src/components/money/NoteSection.tsx
 */
export const NoteSection: React.FC<Props> = (props) => {
  const noteValue = props.noteValue

  /* 备注输入功能 */
  const changeNote: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onNoteChange(e.target.value)
  }

  return (
    <NoteStyled>
      <LabelInput
        label="备注"
        type="text"
        placeholder="在这里添加备注"
        value={noteValue}
        onChange={changeNote}/>
    </NoteStyled>
  )
}
