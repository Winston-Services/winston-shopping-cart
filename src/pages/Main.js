import React, { useState, Suspense } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import config from "../config";
import ItemCard from "../components/ItemCard";
import CaptchaComponent from "./CaptchaComponent";
import ReviewCart from "../pages/cart/ReviewCart";
import AgreeToTerms from "../pages/cart/AgreeToTerms";
import ConfirmShipping from "../pages/cart/ConfirmShipping";
import ConfirmBilling from "../pages/cart/ConfirmBilling";
import SelectPaymentMethod from "../pages/cart/SelectPaymentMethod";
import ConfirmPayment from "../pages/cart/ConfirmPayment";
import ProcessPayment from "../pages/cart/ProcessPayment";

let productList = config.productList;
export default function Main() {
  const [showItemGridDisplay, setItemGridDisplay] = useState(true);
  const [showCheckoutStep, setCheckoutDisplayStep] = useState(0);
  const [showProductDisplayItem, setProductDisplayItem] = useState(null);
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLeadLoading, setIsLeadLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  React.useEffect(() => {
    const apiCallResults = Promise.resolve({
      data: productList,
    });
    if (isLoading) {
      apiCallResults
        .then((result) => {
          return result.data;
        })
        .then((formatedData) => {
          setItems(formatedData);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoading]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (captcha) {
      setIsLeadLoading(true);
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
        setResponse({
          isError: false,
          msg: "Your request has been sent.",
        });
        setIsLeadLoading(false);
      } catch (e) {
        setResponse({
          isError: true,
          msg: "Your request has not been sent.",
        });
        setIsLeadLoading(false);
      }
    }
  }

  function onChange(value) {
    setCaptcha(value);
  }

  const ProductItemDisplayComponent = (props) => {
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
                    <Typography fontSize={96} fontWeight={300}></Typography>
                  </Paper>
                  <Paper color="secondary" sx={{ py: 1, mt: "5px" }}>
                    <Typography variant="subtitle1" textAlign={"center"}>
                      Days left
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item mt="50px">
                  <Paper color="secondary" sx={{ p: 2 }}>
                    <Typography fontSize={96} fontWeight={300}></Typography>
                  </Paper>
                  <Paper color="secondary" sx={{ py: 1, mt: "5px" }}>
                    <Typography variant="subtitle1" textAlign={"center"}>
                      Hours left
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item mt="50px">
                  <Paper color="secondary" sx={{ p: 2 }}>
                    <Typography fontSize={96} fontWeight={300}></Typography>
                  </Paper>
                  <Paper color="secondary" sx={{ py: 1, mt: "5px" }}>
                    <Typography variant="subtitle1" textAlign={"center"}>
                      Minutes left
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              {response && !response.isError ? (
                <Typography variant="h6" mt={"100px"} mb={2}>
                  Your request has been submitted.
                </Typography>
              ) : (
                <form onSubmit={(e) => handleSubmit(e)}>
                  <Typography variant="h6" mt={"100px"} mb={2}>
                    Get notified when we launch
                  </Typography>
                  <TextField
                    fullWidth
                    type={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email address"
                    variant="outlined"
                    placeholder="Enter email address"
                    disabled={isLeadLoading}
                    helperText={response.msg}
                    error={response.isError}
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
                    disabled={!captcha || isLeadLoading}
                  >
                    {isLeadLoading ? (
                      <CircularProgress size={24} sx={{ mr: 2 }} />
                    ) : null}
                    Submit
                  </Button>
                </form>
              )}
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
        <></>
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
    ),
  };

  const ItemListDisplay = () => {
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
          <Grid container display={"flex"} spacing={1}>
            {items.map((product) => (
              <Grid item xs={12} md={4} key={product.id}>
                <Paper color="secondary" sx={{ p: ".15rem"}}>
                  <ItemCard
                    handleCartMethods={{
                      showProductItemDisplay: () => {
                        setItemGridDisplay(false);
                        setProductDisplayItem(product);
                      },
                      hideProductItemDisplay: () => {
                        setItemGridDisplay(true);
                        setProductDisplayItem(null);
                      },
                      addToWishList: () => {
                        if (wishlist.indexOf(product.id) === -1) {
                          setWishlist([...wishlist, product.id]);
                        }
                      },
                      removeFromWishList: () => {
                        if (wishlist.indexOf(product.id) !== -1) {
                          setWishlist(
                            wishlist.filter(
                              (productId) => productId !== product.id
                            )
                          );
                        }
                      },
                      addToFavorites: () => {
                        if (favorites.indexOf(product.id) === -1) {
                          setFavorites([...favorites, product.id]);
                        }
                      },
                      removeFromFavorites: () => {
                        if (favorites.indexOf(product.id) !== -1) {
                          setFavorites(
                            favorites.filter(
                              (productId) => productId !== product.id
                            )
                          );
                        }
                      },
                      shareItem: () => {},
                      addToCart: () => {
                        if (cartItems.indexOf(product.id) === -1) {
                          setCartItems([...cartItems, product.id]);
                        }
                      },
                      removeFromCart: () => {
                        if (cartItems.indexOf(product.id) !== -1) {
                          setCartItems(
                            cartItems.filter(
                              (productId) => productId !== product.id
                            )
                          );
                        }
                      },
                      clearCart: () => {
                        setCartItems([]);
                      },
                      checkout: () => {
                        setItemGridDisplay(false);
                        setCheckoutDisplayStep(1);
                      },
                      confirmShipping: () => {},
                      confirmPayment: () => {},
                      paymentSuccessful: () => {},
                      paymentError: () => {},
                      favorites,
                      wishlist,
                      cartItems,
                    }}
                    {...product}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Suspense>
    );
  };

  if (showCheckoutStep) {
    return checkoutProcess[showCheckoutStep];
  } else
    return (
      <>
        {showItemGridDisplay ? (
          <ItemListDisplay />
        ) : (
          <ProductItemDisplayComponent product={showProductDisplayItem} />
        )}
      </>
    );
}
