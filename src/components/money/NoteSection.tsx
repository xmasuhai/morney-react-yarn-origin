import styled from 'styled-components'
import React, { useRef, useState } from 'react'

const NoteSectionStyled = styled.section`
  background-color: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span { margin-right: 16px; white-space: nowrap; }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background-color: transparent;

    }
  }

`

/**
 * 备注 模块
 * */
export const NoteSection: React.FC = () => {
  /* 备注输入功能 */
  const [note, setNote] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  const changeNote = () => {
    if (!inputRef.current) { return }
    setNote(inputRef.current.value)
  }

  return (
    <NoteSectionStyled>
      <label>
        <span>备注</span>
        <input
          type="text"
          ref={inputRef}
          defaultValue={note}
          onBlur={changeNote}
          placeholder="在这里添加备注" />
      </label>
    </NoteSectionStyled>
  )
}
