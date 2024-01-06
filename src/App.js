import React, { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicPageLayout from "./layouts/PublicPageLayout";
import DashboardPageLayout from "./layouts/DashboardPageLayout";
import config from "./config";
import { store } from "./store";
const MainComponent = React.lazy(() => import("./pages/Main"));
const SetupComponent = React.lazy(() => import("./pages/setup"));
const SignInComponent = React.lazy(() => import("./pages/signin"));
const DashboardComponent = React.lazy(() => import("./pages/dashboard"));

function App() {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;

  React.useEffect(() => {
    let active = true;
    if (active) {
      if (state.socketClient === undefined) {
        dispatch({
          type: "connect",
          section: "connection"
        });

        if (state.socketClient) {
          state.socketClient.on("connected", client => {
            dispatch({
              type: "socketConnected",
              section: "connection",
              payload: client
            });
          });
          state.socketClient.on("error", () => {
            // do nothing.
          });
        }
      }
      document.title = state.settings.siteMetadata.title;
      const description = document.head.querySelector('meta[name="description"]')
      let descriptionContent = description.attributes.getNamedItem('content');
      descriptionContent.value = state.settings.siteMetadata.description;
      const keywords = document.head.querySelector('meta[name="keywords"]');
      let keywordsContent = keywords.attributes.getNamedItem('content');
      keywordsContent.value = state.settings.siteMetadata.keywords;
      document.title = state.settings.siteMetadata.title;
    }
    return () => {
      active = false;
    };
  });

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
        {config.admin.length === 0
          ? <Route
              path="/setup"
              element={
                <Suspense
                  fallback={
                    <Box
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                      height={"100vh"}
                      minHeight="100%"
                    >
                      <CircularProgress color="info" />
                    </Box>
                  }
                >
                  <SetupComponent />
                </Suspense>
              }
            />
          : <Route
              path="/sign-in"
              element={
                <Suspense
                  fallback={
                    <Box
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                      height={"100vh"}
                      minHeight="100%"
                    >
                      <CircularProgress color="info" />
                    </Box>
                  }
                >
                  <SignInComponent />
                </Suspense>
              }
            />}

        {config.admin.length !== 0 &&
          <Route
            path="/sign-up"
            element={
              <Suspense
                fallback={
                  <Box
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                    height={"100vh"}
                    minHeight="100%"
                  >
                    <CircularProgress color="info" />
                  </Box>
                }
              >
                <SignInComponent register />
              </Suspense>
            }
          />}
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
