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
import { Skeleton } from "@mui/material";

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
  const test = {
    id: "02c84d0e-9c9d-4837-ada8-aad7d8345582",
    price: "29.99",
    title: "Winston Water Bottles",
    shortDescription:
      "When on the go Winston has you covered with this sporty water bottle.",
    description:
      "While on the go this sports water bottle is sure to help you when your thurst hits, just fill it with your favorite bevereages.",
    downloadable: true,
    thumbnail:
      "data:image/png;base64,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",
    images: [
      {
        src: "../assets/products/images/Winston_Waterbottle.png",
        alt: "Winston take Ahwa for a walk. Blue Sports waterbottle."
      }
    ],
    category: "Sports Gear",
    subcategory: "Water Bottles",
    overview:
      "Consequat culpa voluptate Lorem dolore aliquip sit pariatur. In do tempor reprehenderit sint excepteur labore est duis cillum. Do excepteur anim dolore ad nostrud fugiat mollit nisi. Occaecat deserunt consequat minim minim Lorem magna ex laborum reprehenderit nulla irure cillum. Deserunt excepteur sit enim fugiat exercitation ullamco elit tempor qui nulla cillum. Minim laboris pariatur eiusmod et enim incididunt occaecat cupidatat sint reprehenderit qui. Est incididunt ex dolor in enim fugiat proident pariatur officia aliquip duis.",
    reviews: [
      {
        comment: "Love the rewards",
        commenterName: "",
        commenterEmail: "",
        rating: 5
      },
      {
        comment: "Love the rewards",
        commenterName: "",
        commenterEmail: "",
        rating: 3
      },
      {
        comment: "Can't get it to work.",
        commenterName: "",
        commenterEmail: "",
        rating: 1
      },
      {
        comment: "Love the rewards",
        commenterName: "",
        commenterEmail: "",
        rating: 5
      }
    ],
    tags: ["sports", "waterbottle", "winston"],
    shipsFrom: {
      address_1: "",
      address_2: "",
      address_3: "",
      address_4: ""
    },
    manufactures: [
      {
        name: "",
        address_1: "",
        address_2: "",
        address_3: "",
        address_4: ""
      }
    ],
    attributes: [{}],
    options: [
      {
        isDefault: true,
        name: "Duration",
        type: "ChooseOne",
        options: [
          {
            name: "Annual Members Role",
            value: "annual",
            label: "Annual Membership",
            acceptCurrencies: [
              "USDC",
              "BNB",
              "WBNB",
              "BUSD",
              "RICKLE",
              "WINSTON"
            ],
            price: "1.00",
            priceInUSD: "1.00"
          },
          {
            name: "Trial Members Role",
            value: "trial",
            label: "Trial Membership",
            acceptCurrencies: ["RICKLE", "WINSTON"],
            price: "1.60",
            priceInUSD: "1.60"
          }
        ]
      }
    ]
  };
  const ProductItemDisplayComponent = props => {
    const { product } = props;
    //console.log(product)
    const productItem = product[0];
    console.log(productItem);
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
          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems="center"
            spacing={2}
          >
            <Grid item md={4} textAlign="center" alignItems={"center"}>
              {!productItem.images[0]
                ? <Skeleton
                    animation="wave"
                    variant="rounded"
                    width={350}
                    height={350}
                  />
                : <React.Fragment>
                    <Typography variant="h4" mt={0}>
                      {test.title}
                    </Typography>
                    <Paper sx={{ padding: "6px" }} elevation={6}>
                      <img
                        src={productItem.images[0].src}
                        alt="Product #"
                        width={350}
                        height={350}
                        style={{ paddingTop: "4px" }}
                      />
                    </Paper>

                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ mt: "30px" }}
                    >
                      Add To Cart
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ mt: "30px" }}
                    >
                      Continue Shopping
                    </Button>
                  </React.Fragment>}
            </Grid>
            <Grid item md={8}>
              <Typography
                variant="h4"
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
                  {test.category}{" "}
                </span>

                <span
                  style={{
                    marginLeft: "16px"
                  }}
                >
                  <small>
                    {test.subcategory}
                  </small>
                </span>
              </Typography>
              <Typography variant="h4" mt={2}>
                {test.description}
              </Typography>
              <Grid container spacing={3} />
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
