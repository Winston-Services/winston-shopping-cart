import React, { Suspense } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography
} from "@mui/material";
import { Skeleton } from "@mui/material";
import { store } from "../store";

export function ProductItemDisplayComponent() {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const product = state.showProductDisplayItem;
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
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        spacing={1}
        marginTop={6}
      >
        <Grid item md={4} textAlign="center" alignItems={"center"}>
          {!product[0].images[0]
            ? <Skeleton
                animation="wave"
                variant="rounded"
                width={350}
                height={350}
              />
            : <React.Fragment>
                <Typography variant="h4" mt={0}>
                  {product[0].title}
                </Typography>
                <Paper sx={{ margin: "6px" }} elevation={6}>
                  <Box sx={{ padding: "6px" }}>
                    <img
                      src={product[0].images[0].src}
                      alt="Product #"
                      width={"100%"}
                      height={"100%"}
                      style={{ padding: "16px", paddingTop: "18px" }}
                    />
                  </Box>
                </Paper>

                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: "30px" }}
                  onClick={() => {
                    state.cartItems.indexOf(product.id) !== -1
                      ? dispatch({ type: "removeFromCart", payload: product.id })
                      : dispatch({ type: "addToCart", payload: product.id });
                  }}
                >
                  Add To Cart
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: "30px" }}
                  onClick={() => {
                    dispatch({
                      type: "showProductItemDisplay",
                      payload: {
                        item: null,
                        showItemGridDisplay: !state.showItemGridDisplay
                      }
                    });
                  }}
                >
                  Continue Shopping
                </Button>
              </React.Fragment>}
        </Grid>
        <Grid item md={8}>
          <Typography
            variant="subtitle1"
            sx={theme => {
              return { color: theme.palette.secondary.contrastText };
            }}
          >
            <span
              style={{
                textDecorationThickness: ".01rem",
                textDecorationLine: "underline",
                textDecorationStyle: "wavy"
              }}
            >
              {product[0].category}{" "}
            </span>

            <span
              style={{
                marginLeft: "16px"
              }}
            >
              <small>
                {product[0].subcategory}
              </small>
            </span>
          </Typography>
          <Typography variant="subtitle2" mt={2}>
            {product[0].description}
          </Typography>
          <Grid container spacing={3} />
        </Grid>
      </Grid>
    </Suspense>
  );
}
