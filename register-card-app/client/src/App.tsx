import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout, { RouteMatcher } from './components/Layout/Layout'
import MenuContent from './components/MenuContent/MenuContent'

const routes: RouteMatcher[] = [
  {
    showMenus: true,
    path: '/MenuContent',
    title: 'Menu'
  },
  {
    showMenus: false,
    path: '/',
    title: 'Register card form',
    default: true
  },
]

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Layout routes={routes}>
          <Switch>
            <Route path="/">
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
