import styled from 'styled-components'

/**
 * @Description: 记账记录项目样式
 * @Author: XuShuai
 * @Date: 2025-05-07 05:22:29
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-05-07 05:45:15
 * @FilePath: src/components/statistics/styled/RecordStyled.tsx
 */
export const RecordStyled = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  & > .tags {
    display: flex;
    flex-wrap: nowrap;
  }

  & > .note {
    color: #999;
    padding-left: 1em;
    margin-right: auto;
  }

  & > .amount {}

  & > .date {}
`
