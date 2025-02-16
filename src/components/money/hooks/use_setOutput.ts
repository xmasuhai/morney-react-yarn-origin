/**
 * @Description: 统一处理 键盘输出
 * @Author: XuShuai
 * @Date: 2025-02-16 14:32:29
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-16 14:33:19
 * @FilePath: src/components/money/hooks/use_setOutput.ts
 */
export const use_setOutput = (
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
