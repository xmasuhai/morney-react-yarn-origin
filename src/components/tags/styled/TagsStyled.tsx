import styled from 'styled-components'

/**
 * @Description: 标签页面 标签列表样式
 * @Author: XuShuai
 * @Date: 2024-01-04 06:20:56
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-22 23:26:04
 * @FilePath: src/components/tags/styled/TagsStyled.tsx
 */
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
