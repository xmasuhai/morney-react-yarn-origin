import styled from 'styled-components'

/**
 * 备注 模块
 * */
export const NotesSection = styled.section`
  background-color: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span { margin-right: 16px; white-space: nowrap; }

    > input { 
      display: block; 
      width: 100%;
      height: 72px;
      background-color: transparent;
      
    }
  }

`
