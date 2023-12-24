import styled from 'styled-components'
import React from 'react'
import {generateNthChildStyles} from '../../styled-components-helpers/generateNthChildStyles'

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

  return (
    <NumberPadStyled>
      <div className="output">100</div>
      <div className="pad clear-fix">
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
