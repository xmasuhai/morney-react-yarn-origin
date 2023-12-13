/**
 * @Description 根组件
 * */
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import styled from 'styled-components'
import {Nav} from 'components/Nav'
import {Layout} from './components/Layout'

export const App = () => {
  return (
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
  )
}

// 统计页面
function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  )
}

// 标签页面
function Tags() {
  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  )
}

// 记账页面
function Money() {
  return  (
    <Layout>
      <h2>记账页面</h2>
    </Layout>
  )
}

function NoMatch() {
  return <h2>404</h2>
}
