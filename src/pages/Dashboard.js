import React from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AddShoppingCart, PlusOne } from "@mui/icons-material";
import { store } from "../store";
import { Divider } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Dashboard() {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const [expanded, setExpanded] = React.useState({
    Settings: false,
    Products: false,
    Reports: false
  });
  const [visable, setVisable] = React.useState("Settings");
  const [isMobile, setIsMobile] = React.useState(false);
  const handleExpandClick = name => {
    setExpanded({ ...expanded, [name]: !expanded[name] });
  };

  const ExpandMore = styled(props => {
    const { expand, ...other } = props;
    return <IconButton {...other} name={expand} />;
  })(({ theme, expand }) => ({
    transform: !expanded[expand] ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  }));
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const setScreenState = React.useCallback((matches) => {
    setIsMobile(matches);
  }, [setIsMobile])
  
  
  React.useLayoutEffect(() => setScreenState(matches));
  return (
    <Container sx={{ mt: "100px" }}>
      <Grid container display={"flex"} justifyContent={"center"}>
        <Grid item xs={12}>
          <Paper
            color="secondary"
            sx={{ m: ".25rem", p: ".25rem", minHeight: "60vh" }}
          >
            <Grid
              container
              display={"flex"}
              justifyContent={"left"}
              spacing={1}
            >
              <Grid item xs={12} md={3}>
                {["Settings", "Products", "Reports"].map(menuItem =>
                  <Card
                    sx={{
                      borderRadius: "6px",
                      margin: "0.25rem",
                      paddingY: ".75rem"
                    }}
                    elevation={2}
                  >
                    <CardActions>
                      <Grid container display={"flex"} alignItems={"center"}>
                        <Grid item xs={12}>
                          <IconButton
                            aria-label="add to favorites"
                            onClick={() => {
                              dispatch({
                                type: "addToFavorites",
                                payload: {}
                              });
                            }}
                          >
                            🗣️
                          </IconButton>
                          <IconButton
                            aria-label="share"
                            onClick={() => {
                              dispatch({
                                type: "setShowShare",
                                payload: {}
                              });
                            }}
                          >
                            <ShareIcon />
                          </IconButton>
                          <IconButton
                            aria-label="add-to-cart"
                            onClick={() => {
                              dispatch({
                                type: "addToCart",
                                payload: {}
                              });
                            }}
                          >
                            📭 📬
                          </IconButton>
                          <IconButton
                            aria-label="add-to-wishlist"
                            onClick={() => {
                              dispatch({
                                type: "addToWishList",
                                payload: {}
                              });
                            }}
                          >
                            <PlusOne
                              sx={{
                                color: "white"
                              }}
                            />
                          </IconButton>
                          <span style={{ float: "right" }}>
                            <ExpandMore
                              expand={menuItem}
                              name={menuItem}
                              onClick={e => {
                                e.preventDefault();
                                handleExpandClick(menuItem);
                              }}
                              aria-expanded={expanded[menuItem]}
                              aria-label="show more"
                            >
                              <ExpandMoreIcon name={menuItem} />
                            </ExpandMore>
                          </span>
                        </Grid>
                      </Grid>
                    </CardActions>
                    <CardContent>
                      {menuItem}
                      <span
                        style={{ float: "right" }}
                        onClick={() => {
                          setVisable(menuItem);
                        }}
                      >
                        {visable === menuItem ? isMobile ? "➡️" : "⬇️" : "👁️"}
                      </span>
                    </CardContent>
                  </Card>
                )}
              </Grid>
              <Grid item xs={12} md={9}>
                <Card
                  sx={{
                    borderRadius: "6px",
                    marginY: ".25rem",
                    height: "100%"
                  }}
                  elevation={3}
                >
                  <CardContent>
                    <Typography component="h2" variant="title">
                      Settings
                    </Typography>
                    <Divider />
                    <Typography variant="body1">
                      Manage your cart preferences and settings.
                    </Typography>
                    <Typography component="h3" variant="title">
                      General Settings
                    </Typography>
                    <Divider />
                    <Typography component="h3" variant="title">
                      Language Settings
                    </Typography>
                    <Divider />
                    Primary Language: English US en_US
                    <Typography component="h3" variant="title">
                      Site Metadata
                    </Typography>
                    <Divider />
                    Title: "" Description: "", keywords: "" Copyright :
                    <Typography component="h3" variant="title">
                      Checkout Settings
                    </Typography>
                    <Divider />
                    {`
                    paymentTypes: ["crypto", "credit-card"],
    cryptoPaymentAddress: { bnb: "", eth: "", polygon: "", xdai: "" },
    paymentCurrencies: [
      {
        type: "credit-card",
        network: "nmi",
        currency: ["USD", "CAD"],
      },
      {
        type: "crypto",
        network: "bnb",
        currency: ["BNB", "BUSD", "USDC", "USDT", "RKL", "WIN"],
      },
      {
        type: "crypto",
        network: "eth",
        currency: ["ETH", "USDC", "RKL"],
      },
      {
        type: "crypto",
        network: "polygon",
        currency: ["MATIC", "USDC", "MIMATIC", "RKL"],
      },
      {
        type: "crypto",
        network: "xdai",
        currency: ["XDAI", "USDC", "RKL"],
      },
    ],
    defaultPaymentCurrency: {
      type: "crypto",
      network: "bnb",
      currency: "WIN",
    },
    termsAndConditions: "https://gist.com/ugedkig",`}
                    <Typography component="h3" variant="title">
                      Storage Settings
                    </Typography>
                    <Divider />
                    *Product Listing Options Use Github For Product List Use API
                    For Product List Use Winston For Product List Use Config
                    File for Product List
                    <Typography component="h3" variant="title">
                      Blockchain API Settings
                    </Typography>
                    <Divider />
                    <Typography component="h3" variant="title">
                      Wallet Settings
                    </Typography>
                    <Divider />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
