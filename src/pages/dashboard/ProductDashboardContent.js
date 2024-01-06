import React, { Suspense } from "react";
import { Typography, CardContent, CircularProgress } from "@mui/material";
import { Divider, Box } from "@mui/material";
import { AddProductContent } from "./AddProductContent";
import { store } from "../../store";

export function ProductDashboardContent() {
  const appState = React.useContext(store);
  const { state } = appState;
  return (
    <CardContent>
      <Typography component="h2" variant="title">
        Products
      </Typography>
      <Divider />
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
        <AddProduct items={state.items} />
      </Suspense>
    </CardContent>
  );
}

export function AddProduct(props) {
  if (props.items.length) {
    return <AddProductContent />;
  } else return null;
}
