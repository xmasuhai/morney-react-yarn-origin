import React, {FC, useState,} from 'react'
import {NumberPadStyled} from './styled/NumberPadStyled'
import {InputTextString, genOutput} from './helpers/genOutput'

type Props = {
  amountValue: number;
  onAmountChange: (newAmount: number) => void;
  onConfirm?: () => void;
}

/**
 * 数字键盘
 * */
export const NumberPad: FC<Props> = (
  {
    amountValue,
    onAmountChange,
    onConfirm,
  }
) => {
  const [outputValue, setOutputValue] = useState(`${amountValue}`)

  /* 统一处理 setOutput */
  const setOutput = (output: string) => {
    let newOutput: string
    if(output.length > 16) {newOutput = output.slice(0, 16)} else if(output.length === 0) {newOutput = '0'} else { newOutput = output }
    setOutputValue(newOutput)
    onAmountChange(parseFloat(newOutput))
  }

  /* 事件代理 键盘点击事件 */
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if(!text) {return}

    if(text === 'OK') {
      // TODO 提交逻辑
      onConfirm && onConfirm()
      return
    }

    // TODO 使用类型枚举优化
    if('0123456789.'.split('').concat(['删除', '清空',]).includes(text)) {
      setOutput(genOutput(text as InputTextString, outputValue))
    }

  }

  return (
    <NumberPadStyled>
      <div className="output">{outputValue}</div>
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
