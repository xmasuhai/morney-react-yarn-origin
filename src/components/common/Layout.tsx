import styled from 'styled-components'
import {Nav} from 'components/common/Nav'
import {useEffect, useRef} from 'react'

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
  className?: string;
  scrollTop?: number;
}

/**
 * @Description:
 * @Author: XuShuai
 * @Date: 2023-12-14 06:31:20
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-06-02 06:33:28
 * @FilePath: src/components/common/Layout.tsx
 */
export const Layout = (props: Props) => {
  const mainRef = useRef<HTMLDivElement>(null)

  /* 渲染后将 scrollTop 更新 */
  useEffect(() => {
    setTimeout(() => {
      if(!mainRef?.current) {return}
      mainRef.current.scrollTop = props.scrollTop! ?? 0

      console.log('_______________________')
      console.log('%c 5 --> props.scrollTop: ', 'color:#0ff;',
        props.scrollTop)
      console.log('%c 2 --> mainRef.current.scrollTop: ', 'color:#0f0;',
        mainRef.current.scrollTop)
      console.log('_______________________')
    }, 0)

  }, [props.scrollTop])

  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  )
}

/** 设置组件参数默认值*/
Layout.defaultProps = {
  scrollTop: 0,
  className: ''
}
