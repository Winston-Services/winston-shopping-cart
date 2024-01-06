import React, { Suspense } from "react";
import {
  Box,
  CircularProgress,
  Container} from "@mui/material";

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
import { ProductItemDisplayComponent } from "./ProductItemDisplayComponent";

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
    return (
      <Container>
        {state.showItemGridDisplay
          ? <ItemListDisplay />
          : <ProductItemDisplayComponent />}
      </Container>
    );
}


