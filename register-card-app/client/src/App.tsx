import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout, { RouteMatcher } from './components/Layout/Layout'
import MenuContent from './components/MenuContent/MenuContent'

const routes: RouteMatcher[] = [
  {
    showMenus: true,
    path: '/MenuContent',
  },
  {
    showMenus: false,
    path: '/Main',
  },
]

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Layout routes={routes}>
          <Switch>
            <Route path="/Main">
              <div>Main page</div>
            </Route>
            <Route exact path="/MenuContent">
              <MenuContent />
            </Route>
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  )
}

export default App
