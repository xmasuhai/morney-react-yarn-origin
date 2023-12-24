import styled from 'styled-components'
import React from 'react'

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
      
      &:nth-child(1) {background-color: #f2f2f2;}
      
      &:nth-child(2),
      &:nth-child(5) {background-color: #e0e0e0;}
      
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {background-color: #d3d3d3;}
      
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {background-color: #c1c1c1;}

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {background-color: #b8b8b8;}

      &:nth-child(12) {background-color: #9a9a9a;}
      &:nth-child(14) {background-color: #a9a9a9;}
      
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
