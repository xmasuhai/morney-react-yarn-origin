import React, {FC, useState,} from 'react'
import {NumberPadStyled} from './styled/NumberPadStyled'
import {InputTextString, genOutput} from './helpers/genOutput'
import {changeOutput} from './helpers/changeOutput'

export type Props = {
  amountValue: number;
  onAmountChange: (newAmount: number) => void;
  onConfirm?: () => void;
}

/**
 * @Description: 数字键盘
 * @Author: XuShuai
 * @Date: 2023-12-19 05:42:44
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-03-23 22:25:40
 * @FilePath: src/components/money/NumberPadSection.tsx
 */
export const NumberPadSection: FC<Props> = (
  {
    amountValue,
    onAmountChange,
    onConfirm,
  }
) => {
  // bug 过期的闭包
  // const [outputValue, setOutputValue] = useState(`${amountValue}`)

  const outputValue = amountValue.toString()
  
  /** 事件代理 键盘点击事件 */
  const onClickButtonWrapper = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const text = (e.target as HTMLButtonElement).textContent
    if(!text) {return}

    if(text === 'OK') {
      onConfirm && onConfirm()
      return
    }

    // TODO 使用类型枚举优化
    const ifFitText = '0123456789.'
      .split('')
      .concat(['删除', '清空',])
      .includes(text)

    if(ifFitText) {
      changeOutput(
        genOutput(text as InputTextString, outputValue),
        // setOutputValue,
        onAmountChange,
      )
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
