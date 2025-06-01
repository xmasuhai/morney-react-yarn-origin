import {HashRouter as Router, Redirect, Route, Switch,} from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import {Tags} from 'views/Tags'
import {Money} from 'views/Money'
import {Statistics} from 'views/Statistics'
import {NoMatch} from 'views/NoMatch'
import {TagEdit} from 'views/TagEdit'
import {
  ReactComponentInspector
} from './components/common/ReactComponentInspector'

const AppWrapper = styled.main`
  color: #333;
`

/**
 * @Description: 根组件
 * @Author: XuShuai
 * @Date: 2024-12-08 13:34:12
 * @LastEditors: XuShuai
 * @LastEditTime: 2025-06-01 20:36:16
 * @FilePath: src/App.tsx
 */
export const App = () => {
  return (
    <AppWrapper>
      {/* 组件调试工具 */}
      <ReactComponentInspector>
        {/* 路由 */}
        <Router>
          <Switch>
            <Route path="/tags" exact>
              <Tags/>
            </Route>
            <Route path="/tags/:id" exact>
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
            {/* 保底路由，放在最后 */}
            <Route path="*">
              <NoMatch/>
            </Route>

          </Switch>
        </Router>
      </ReactComponentInspector>

    </AppWrapper>
  )
}
