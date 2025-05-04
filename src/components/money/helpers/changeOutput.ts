/**
 * @Description: 统一处理 键盘输出
 * @Description: 需要分开处理：组件内部显示逻辑与输出逻辑
 * @Author: XuShuai
 * @Date: 2025-02-16 14:32:29
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-04 22:09:05
 * @FilePath: src/components/money/helpers/changeOutput.ts
 */
export const changeOutput = (
  // 显示的输出字符串
  output: string,
  setOutputValue: (newOutput: string) => void,
  onAmountChange: (newAmount: number) => void,
) => {
  let newOutput: string
  if(output.length > 16) {
    newOutput = output.slice(0, 16)
  } else if(output.length === 0) {
    newOutput = '0'
  } else {
    newOutput = output
  }
  // 改变组件内部状态，保留可能带有小数点的字符串
  setOutputValue(newOutput)
  // 触发组件外部金额数字变化
  onAmountChange(parseFloat(newOutput))
}
