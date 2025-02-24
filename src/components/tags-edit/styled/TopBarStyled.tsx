import styled from 'styled-components'

/**
 * @Description: 编辑标签 顶部栏
 * @Author: XuShuai
 * @Date: 2025-02-22 11:57:08
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-24 22:36:51
 * @FilePath: src/components/tags-edit/styled/TopBarStyled.tsx
 */
export const TopBarStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background-color: #fff;

  & > .icon {cursor: pointer;}

  & > .title {font-size: 16px;}

  // 使用伪元素实现标题居中
  &::after {
    content: '';
    display: block;
  }
`
