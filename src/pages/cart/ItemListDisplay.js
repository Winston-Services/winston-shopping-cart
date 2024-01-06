import React, { Suspense } from "react";
import { Box, CircularProgress, Container, Grid, Paper } from "@mui/material";
import ItemCard from "../../components/ItemCard";
import { store } from "../../store";
import { OptionsBar } from "./OptionsBar";

export function ItemListDisplay() {
  const appState = React.useContext(store);
  const { state } = appState;
  return (
    <Suspense
      fallback={
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          height={"100%"}
          minHeight="100%"
        >
          <CircularProgress />
        </Box>
      }
    >
      <Container>
        <OptionsBar />

        <Grid container display={"flex"} spacing={1}>
          {state.page.items.length === 0
            ? state.items.map(product =>
                <Grid item xs={12} md={4} key={product.id}>
                  <Paper color="secondary" sx={{ p: ".15rem" }}>
                    <ItemCard {...product} />
                  </Paper>
                </Grid>
              )
            : state.page.items.map(product =>
                <Grid item xs={12} md={4} key={product.id}>
                  <Paper color="secondary" sx={{ p: ".15rem" }}>
                    <ItemCard {...product} />
                  </Paper>
                </Grid>
              )}
        </Grid>
      </Container>
    </Suspense>
  );
}
