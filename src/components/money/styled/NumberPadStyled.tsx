import styled from 'styled-components'
import {generateNthChildStyles} from './helpers/generateNthChildStyles'

/**
 * @Description: 数字键盘样式
 * @Author: XuShuai
 * @Date: 2023-12-30 17:10:48
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-16 16:00:37
 * @FilePath: src/components/money/styled/NumberPadStyled.tsx
 */
export const NumberPadStyled = styled.section`
  display: flex;
  flex-direction: column;

      & > .output {
    background-color: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

      & > .pad {

            & > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
                  cursor: pointer;

                  &.ok { float: right; height: 128px;}

      &.zero {width: 50%;}

                  // 导入按钮css样式代码块
      ${generateNthChildStyles()}

    }

  }
`
