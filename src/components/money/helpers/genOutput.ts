export type InputTextString =
  | `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
  | '.'
  | '删除'
  | '清空'

/**
 * @Description: 通过 0-9、.、删除、清空按钮的字符串，返回输出字符串
 * @Author: XuShuai
 * @Date: 2023-12-30 17:16:31
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-04 22:07:59
 * @FilePath: src/components/money/helpers/genOutput.ts
 */
export const genOutput = (
  // 输入的每一个字符
  inputEachText: InputTextString,
  // 页面显示的输出字符串
  outputStr = '0',
) => {
  switch(inputEachText) {
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
      if(outputStr === '0') {
        return inputEachText
      } else {
        return outputStr + inputEachText
      }
    case '.':
      if(outputStr.includes('.')) {return outputStr}
      return outputStr + '.'
    case '删除':
      if(outputStr.length === 1) {
        return ''
      } else {
        return outputStr.slice(0, -1) || ''
      }
    case '清空':
      return ''
    default:
      return ''
  }
}
