import styled from 'styled-components'
import React, {useState} from 'react'
import {generateNthChildStyles} from 'styled-components-helpers/generateNthChildStyles'

const NumberPadStyled = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background-color: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  > .pad {

    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;

      &.ok {
        float: right;
        height: 128px;
      }

      &.zero {width: 50%;}

      ${generateNthChildStyles()}

    }

  }
`

/**
 * 数字键盘
 * */
export const NumberPad = () => {
  const [output, setOutput] = useState('0')

  /* 事件代理 键盘点击事件 */
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if(!text) {return}
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        if(output === '0') {
          setOutput(text)
        } else {
          setOutput(output + text)
        }
        break
      case 'OK':
        console.log('确认')
        break
      case '删除':
        console.log('删除')
        break
      case '清空':
        console.log('清空')
        break

    }

  }

  return (
    <NumberPadStyled>
      <div className="output">{output}</div>
      <div
        className="pad clear-fix"
        onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </NumberPadStyled>
  )
}
