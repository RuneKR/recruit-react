import React from "react";
import { Container, Grid } from "@material-ui/core";
import Header from "./Header";

export default function Layout() {
  return (
    <Container maxWidth={false} disableGutters data-testid="Layout">
      <Grid container direction="row" justify="center" alignItems="center">
        <Header title="Menu" data-testid='Header'/>
      </Grid>
    </Container>
  );
}
