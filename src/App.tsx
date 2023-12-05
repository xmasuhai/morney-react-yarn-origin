/**
* @Description 根组件
* */
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`

const Nav = styled.nav`
  border: 1px solid cyan;
  > ul {
    display: flex;
    > li {
      width: 33.333%;
      text-align: center;
      padding: 16px;
    }
  }

`

export const App = () => {
  return (
    <Router>
      <Wrapper>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            {/* 注意重定向组件的位置，放在Switch里面 */}
            <Redirect exact from="/" to="money" />
            <Route path="*">
              <NoMatch />
            </Route>

          </Switch>
        </Main>

        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </Nav>

      </Wrapper>
    </Router>
  );
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

function NoMatch() {
  return <h2>404</h2>;
}
