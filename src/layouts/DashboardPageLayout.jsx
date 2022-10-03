import React, { Suspense } from "react";

import { Box, Container, Grid, CircularProgress } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";

function DashboardPageLayout() {
  return (
    <Box>
      <Header />
      <Box sx={{ minHeight: "calc(100vh - 350px) ", height: "100%" }}>
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
          <Outlet />
        </Suspense>
      </Box>
      <Container sx={{ my: 4 }}>
        <Grid
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          container
        >
          <Grid item justifyContent={"flex-start"}>
            Powered By: Winston Services
          </Grid>
          <Grid item justifyContent={"flex-end"}>
            Copyright © 2022 M.A.D. Computer Consulting LLC
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default DashboardPageLayout;
