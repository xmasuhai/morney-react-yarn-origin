/**
 * @Description: 统一处理 键盘输出
 * @Author: XuShuai
 * @Date: 2025-02-16 14:32:29
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-16 22:21:47
 * @FilePath: src/components/money/helpers/changeOutput.ts
 */
export const changeOutput = (
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
  setOutputValue(newOutput)
  onAmountChange(parseFloat(newOutput))
}
