import React, {useState} from 'react'
import {NumberPadStyled} from './styled/NumberPadStyled'
import {InputTextString, genOutput} from './helpers/genOutput'

/**
 * 数字键盘
 * */
export const NumberPad = () => {
  const [output, _setOutput] = useState('0')
  /* 统一处理 setOutput */
  const setOutput = (output: string) => {
    if(output.length > 16) {output = output.slice(0, 16)}
    else if(output.length === 0) {output = '0'}
    _setOutput(output)
  }

  /* 事件代理 键盘点击事件 */
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if(!text) {return}

    if(text === 'OK') {
      // TODO 提交逻辑
      return
    }

    // TODO 使用类型枚举优化
    if('0123456789.'.split('').concat(['删除', '清空',]).includes(text)) {
      setOutput(genOutput(text as InputTextString , output))
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
