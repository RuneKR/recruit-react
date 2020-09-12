import React, { useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import Header from '../Header/Header'
import { useHistory } from 'react-router-dom'

export interface RouteMatcher {
  default? : boolean 
  showMenus: boolean
  path: string
  title: string
}

type LayoutProps = {
  routes: RouteMatcher[],
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ routes, children }: LayoutProps)  => {
  const defaultTitle = routes.find(r => r.default)?.title || ''

  const history = useHistory()

  const [showMenus, setShowMenus] = useState(false)
  const [headerTitle, setHeaderTitle] = useState(defaultTitle)

  const toggleMenu = (): void => {
    const targetState =!showMenus 

    setShowMenus(targetState)

    const matcher = routes.find((m) => m.showMenus === targetState)
    if (matcher) {
      setHeaderTitle(matcher.title)
      history.push(matcher.path)
    }
  }
  
  return (
    <div>
      <Container maxWidth={false} disableGutters data-testid="Layout">
        <Grid container direction="row" justify="center" alignItems="center">
          <Header
            title={headerTitle}
            isMenuShowing={showMenus}
            toggleMenu={toggleMenu}
            data-testid="Header"
          />
        </Grid>
        {children}
      </Container>
    </div>
  )
}

export default Layout;
