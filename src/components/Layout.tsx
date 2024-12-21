import styled from 'styled-components'
import {Nav} from 'components/Nav'

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
 * @LastEditTime: 2024-12-21 19:09:42
 * @FilePath: src/components/Layout.tsx
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
