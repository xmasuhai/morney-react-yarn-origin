import styled from 'styled-components'
import {generateNthChildStyles} from './helpers/generateNthChildStyles'

export const NumberPadStyled = styled.section`
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

      ${generateNthChildStyles()}

    }

  }
`
