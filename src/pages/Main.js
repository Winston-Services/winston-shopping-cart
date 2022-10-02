import React, { Suspense } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material";

import config from "../config";
import CaptchaComponent from "./CaptchaComponent";
import ReviewCart from "../pages/cart/ReviewCart";
import AgreeToTerms from "../pages/cart/AgreeToTerms";
import ConfirmShipping from "../pages/cart/ConfirmShipping";
import ConfirmBilling from "../pages/cart/ConfirmBilling";
import SelectPaymentMethod from "../pages/cart/SelectPaymentMethod";
import ConfirmPayment from "../pages/cart/ConfirmPayment";
import ProcessPayment from "../pages/cart/ProcessPayment";
import { store } from "../store";
import { ItemListDisplay } from "./cart/ItemListDisplay";

let productList = config.productList;
export default function Main() {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;

  React.useEffect(
    () => {
      const apiCallResults = Promise.resolve({
        data: productList
      });
      if (state.isLoading) {
        apiCallResults
          .then(result => {
            return result.data;
          })
          .then(formatedData => {
            dispatch({
              type: "setItems",
              payload: formatedData
            });
            dispatch({
              type: "setIsLoading",
              payload: false
            });
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    [state.isLoading, dispatch]
  );

  async function handleSubmit(e) {
    e.preventDefault();
    if (state.captcha) {
      dispatch({
        type: "setIsLeadLoading",
        payload: true
      });
      try {
        /*
        await apiInstance({
          method: "POST",
          path: "/users/lead",
          body: {
            email,
            winstonPreregister: true,
          },
        });
        */
        dispatch({
          type: "setResponse",
          payload: {
            isError: false,
            msg: "Your request has been sent."
          }
        });
        dispatch({
          type: "setIsLeadLoading",
          payload: false
        });
      } catch (e) {
        dispatch({
          type: "setResponse",
          payload: {
            isError: false,
            msg: "Your request has not been sent."
          }
        });
        dispatch({
          type: "setIsLeadLoading",
          payload: false
        });
      }
    }
  }

  function onChange(value) {
    dispatch({
      type: "setCaptcha",
      payload: value
    });
  }

  const ProductItemDisplayComponent = props => {
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
        <Container sx={{ mt: "100px" }}>
          <Grid container display={"flex"} alignItems={"center"}>
            <Grid item md={4}>
              Test Area Two
            </Grid>
            <Grid item md={8}>
              <Typography variant="h4">Coming soon</Typography>
              <Typography variant="subtitle2" mt={2}>
                {config.launchDescription}
              </Typography>
              <Grid container spacing={3}>
                <Grid item mt="50px">
                  <Paper color="secondary" sx={{ p: 2 }}>
                    <Typography fontSize={96} fontWeight={300} />
                  </Paper>
                  <Paper color="secondary" sx={{ py: 1, mt: "5px" }}>
                    <Typography variant="subtitle1" textAlign={"center"}>
                      Days left
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item mt="50px">
                  <Paper color="secondary" sx={{ p: 2 }}>
                    <Typography fontSize={96} fontWeight={300} />
                  </Paper>
                  <Paper color="secondary" sx={{ py: 1, mt: "5px" }}>
                    <Typography variant="subtitle1" textAlign={"center"}>
                      Hours left
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item mt="50px">
                  <Paper color="secondary" sx={{ p: 2 }}>
                    <Typography fontSize={96} fontWeight={300} />
                  </Paper>
                  <Paper color="secondary" sx={{ py: 1, mt: "5px" }}>
                    <Typography variant="subtitle1" textAlign={"center"}>
                      Minutes left
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              {state.response && !state.response.isError
                ? <Typography variant="h6" mt={"100px"} mb={2}>
                    Your request has been submitted.
                  </Typography>
                : <form onSubmit={e => handleSubmit(e)}>
                    <Typography variant="h6" mt={"100px"} mb={2}>
                      Get notified when we launch
                    </Typography>
                    <TextField
                      fullWidth
                      type={"email"}
                      value={state.email}
                      onChange={e => {
                        dispatch({
                          type: "setEmail",
                          payload: e.target.value
                        });
                      }}
                      label="Email address"
                      variant="outlined"
                      placeholder="Enter email address"
                      disabled={state.isLeadLoading}
                      helperText={state.response.msg}
                      error={state.response.isError}
                      required
                    />
                    <Grid mt={3}>
                      <CaptchaComponent onChange={onChange.bind(this)} />
                    </Grid>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      sx={{ mt: "30px" }}
                      disabled={!state.captcha || state.isLeadLoading}
                    >
                      {state.isLeadLoading
                        ? <CircularProgress size={24} sx={{ mr: 2 }} />
                        : null}
                      Submit
                    </Button>
                  </form>}
            </Grid>
          </Grid>
        </Container>
      </Suspense>
    );
  };

  const checkoutProcess = {
    0: (
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
        <ReviewCart />
      </Suspense>
    ),
    1: (
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
        <ReviewCart />
      </Suspense>
    ),
    2: (
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
        <AgreeToTerms />
      </Suspense>
    ),
    3: (
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
        <ConfirmShipping />
      </Suspense>
    ),
    4: (
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
        <ConfirmBilling />
      </Suspense>
    ),
    5: (
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
        <SelectPaymentMethod />
      </Suspense>
    ),
    6: (
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
        <ConfirmPayment />
      </Suspense>
    ),
    7: (
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
        <ProcessPayment />
      </Suspense>
    )
  };

  if (state.showCheckoutStep) {
    return checkoutProcess[state.showCheckoutStep];
  } else
    return state.showItemGridDisplay
      ? <ItemListDisplay />
      : <ProductItemDisplayComponent product={state.showProductDisplayItem} />;
}
