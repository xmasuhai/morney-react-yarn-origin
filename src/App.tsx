/**
 * @Description 根组件
 * */
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import React from 'react'
import {Tags} from './views/Tags'
import {Money} from './views/Money'
import {Statistics} from './views/Statistics'
import {NoMatch} from './views/NoMatch'
import styled from 'styled-components'

const AppWrapper = styled.main`
  color: #333;
`

export const App = () => {
  return (
    <AppWrapper>
      <Router>
      <Switch>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        {/* 注意重定向组件的位置，放在Switch里面 */}
        <Redirect exact from="/" to="money"/>
        <Route path="*">
          <NoMatch/>
        </Route>

      </Switch>
    </Router>
    </AppWrapper>
  )
}
