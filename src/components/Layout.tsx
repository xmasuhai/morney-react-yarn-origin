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

export const Layout = (props: Props) => {
  return (
    <Wrapper>
      <Main className={ props.className}>
        { props.children }
      </Main>
      <Nav/>
    </Wrapper>
  )
}
