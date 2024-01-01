import styled from 'styled-components'

// noinspection CssUnusedSymbol
export const CategoryStyled = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    justify-content: center;
    background-color: #c4c4c4;
    position: relative;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background-color: #333;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
      }

    }
  }
`
