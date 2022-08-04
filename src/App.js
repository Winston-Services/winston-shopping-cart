import React, { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicPageLayout from "./layouts/PublicPageLayout";
import DashboardPageLayout from "./layouts/DashboardPageLayout";
import config from "./config";

const MainComponent = React.lazy(() => import("./pages/Main"));
const SetupComponent = React.lazy(() => import("./pages/setup"));
const SignInComponent = React.lazy(() => import("./pages/setup"));
const DashboardComponent = React.lazy(() => import("./pages/Dashboard"));
function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPageLayout />}>
        <Route
          path="/dashboard"
          element={
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
              <DashboardComponent />
            </Suspense>
          }
        />
      </Route>
      <Route path="/" element={<PublicPageLayout />}>
        <Route path="/" element={<MainComponent />} />
        {config.admin.length !== 0 ? (
          <Route path="/setup" element={<SetupComponent />} />
        ) : (
          <Route path="/sign-in" element={<SignInComponent />} />
        )}
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
