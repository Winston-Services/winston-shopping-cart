import React from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import Logo from "./../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import config from "../../config";
import { store } from "../../store";

function Header() {
  const navigate = useNavigate();

  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const { authenticated, cartItems } = state;
  return (
    <Grid className="landingInGradient" py={2}>
      <Container>
        <Grid
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Grid>
            <Box
              component="img"
              src={Logo}
              alt="crypto"
              onClick={() => navigate("/")}
              sx={{ height: "47px" }}
            />
          </Grid>
          <Grid>
            {config.admin.length >= 1
              ? <React.Fragment>
                  {cartItems.length !== 0 &&
                    <Button
                      onClick={() => {
                        dispatch({
                          type: "setCheckoutDisplayStep",
                          payload: 1
                        });
                        return navigate("/");
                      }}
                    >
                      Checkout
                    </Button>}
                  {!authenticated &&
                    <Button onClick={() => navigate("/sign-in")}>
                      Sign-In
                    </Button>}
                  <Button
                    onClick={() => {
                      dispatch({
                        type: "setCheckoutDisplayStep",
                        payload: 0
                      });
                      dispatch({
                        type: "setItemGridDisplay",
                        payload: true
                      });
                      return navigate("/");
                    }}
                  >
                    Products
                  </Button>
                  {authenticated &&
                    <React.Fragment>
                      {cartItems.length !== 0 &&
                        <Button
                          onClick={() => {
                            dispatch({
                              type: "setCheckoutDisplayStep",
                              payload: 0
                            });
                            return navigate("/wishlist");
                          }}
                        >
                          Wishlist
                        </Button>}
                      <Button onClick={() => navigate("/dashboard")}>
                        Dashboard
                      </Button>
                      <Button onClick={() => navigate("/sign-in")}>
                        Sign-Out
                      </Button>
                    </React.Fragment>}
                </React.Fragment>
              : <Button onClick={() => navigate("/setup")}>Setup</Button>}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Header;
