import React, {FC, useEffect, useState,} from 'react'
import {NumberPadStyled} from 'components/money/styled/NumberPadStyled'
import {InputTextString, genOutput} from 'components/money/helpers/genOutput'
import {changeOutput} from 'components/money/helpers/changeOutput'

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
 * @LastEditTime: 2025-05-04 22:36:22
 * @FilePath: src/components/money/NumberPadSection.tsx
 */
export const NumberPadSection: FC<Props> = (
  {
    amountValue,
    onAmountChange,
    onConfirm,
  }
) => {
  // const outputValue = amountValue.toString()
  const [outputValue, setOutputValue] = useState(amountValue.toString())

  /** 监听外部 amountValue 变化，更新组件显示字符 */
  useEffect(() => {
    setOutputValue(amountValue.toString())
  }, [amountValue])

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

    const ifFitText = '0123456789.'
      .split('')
      .concat(['删除', '清空',])
      .includes(text)
    if(!ifFitText) {return}

    changeOutput(
      genOutput(text as InputTextString, outputValue),
      setOutputValue,
      onAmountChange,
    )
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
