import React, { useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import Header from '../Header/Header'
import { useHistory } from 'react-router-dom'

type RouteMatcher = {
  showMenus: boolean
  path: string
}

type LayoutProps = {
  children?: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps)  => {
  const history = useHistory()
  const matchers: RouteMatcher[] = [
    {
      showMenus: true,
      path: '/MenuContent',
    },
    {
      showMenus: false,
      path: '/Main',
    },
  ]

  const [showMenus, setShowMenus] = useState(false)

  const toggleMenu = (): void => {
    const targetState =!showMenus 

    setShowMenus(targetState)

    const matcher = matchers.find((m) => m.showMenus === targetState)
    if (matcher) {
      history.push(matcher.path)
    }
  }

  return (
    <div>
      <Container maxWidth={false} disableGutters data-testid="Layout">
        <Grid container direction="row" justify="center" alignItems="center">
          <Header
            title="Menu"
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
