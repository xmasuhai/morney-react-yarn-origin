/**
 * @Description:
 * @Author: XuShuai
 * @Date: 2024-01-04 06:20:56
 * @LastEditors: XuShuai
 * @LastEditTime: 2024-12-20 22:13:40
 * @FilePath: src/components/tags/styled/TagsStyled.tsx
 */
import styled from 'styled-components'

export const TagsStyled = styled.ol`
  font-size: 16px;
  background-color: #fff;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin: 0 16px 0;

    > a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

  }
`

export const AddTagButton = styled.button`
  font-size: 18px;
  border: 1px solid transparent;
  padding: 8px 12px;
  background-color: #767676;
  color: #fff;
  border-radius: 4px;
`

export const CenterColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Space = styled.div`
  height: 16px;
`
