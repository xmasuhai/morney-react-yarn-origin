import styled from 'styled-components'
import {Nav} from 'components/common/Nav'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`

type Props = {
  children?: any;
  className?: any;
}

/**
 * @Description:
 * @Author: XuShuai
 * @Date: 2023-12-14 06:31:20
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-02-23 20:04:16
 * @FilePath: src/components/common/Layout.tsx
 */
export const Layout = (props: Props) => {
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  )
}
