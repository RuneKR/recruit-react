import React, { useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import Header from '../Header/Header'
import MenuContent from '../MenuContent/MenuContent'

export default function Layout() {
  const [showMenus, setShowMenus] = useState(false)

  const toggleMenu = (e: React.MouseEvent<Element>) => {
    setShowMenus(!showMenus)
  }

  return (
    <Container maxWidth={false} disableGutters data-testid="Layout">
      <Grid container direction="row" justify="center" alignItems="center">
        <Header
          title="Menu"
          isMenuShowing={showMenus}
          toggleMenu={toggleMenu}
          data-testid="Header"
        />
      </Grid>
      <MenuContent />
    </Container>
  )
}
