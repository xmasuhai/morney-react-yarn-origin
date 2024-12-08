import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import {Tags} from 'views/Tags'
import {Money} from 'views/Money'
import {Statistics} from 'views/Statistics'
import {NoMatch} from 'views/NoMatch'
import {TagEdit} from 'views/TagEdit'

const AppWrapper = styled.main`
  color: #333;
`

/**
 * @Description: 根组件
 * @Author: XuShuai
 * @Date: 2024-12-08 13:34:12
 * @LastEditors: XuShuai
 * @LastEditTime: 2024-12-08 16:59:05
 * @FilePath: src/App.tsx
 */
export const App = () => {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/tags" exact>
            <Tags/>
          </Route>
          <Route path="/tags/:tag" exact>
            <TagEdit/>
          </Route>
          <Route path="/money" exact>
            <Money/>
          </Route>
          <Route path="/statistics" exact>
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
