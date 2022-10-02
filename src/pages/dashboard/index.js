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
  IconButton,
  Box
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AddShoppingCart, PlusOne } from "@mui/icons-material";
import { store } from "../../store";
import { Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccountCreated from "../../components/AccountCreated";
import RecentTransactions from "../../components/RecentTransactions";
import TopUsers from "../../components/TopUsers";
import Table from "../../components/Table";
import BalanceChart from "../../components/BalanceChart";

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
  const [comments, setComments] = React.useState([]);

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
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const setScreenState = React.useCallback(
    matches => {
      setIsMobile(matches);
    },
    [setIsMobile]
  );
  React.useEffect(
    () => {
      let active = true;
      if (comments.length === 0 && active) {
        const commentList = Promise.resolve([
          {
            email: "test@domain.tld",
            name: "Ho De Leo",
            comment: "Can you email me at my biz address? Thanks! me@my.biz"
          }
        ]);

        commentList
          .then(r => {
            setComments(r);
            active = false;
          })
          .catch(error => {
            console.log(error);
          });
      }
      return () => {
        active = false;
      };
    },
    [comments]
  );
  React.useLayoutEffect(() => setScreenState(matches));

  const data = [
    {
      Date: "Nov 1",
      Orders: 10
    },
    {
      Date: "Nov 2",
      Orders: 50
    },
    {
      Date: "Nov 3",
      Orders: 30
    },
    {
      Date: "Nov 5",
      Orders: 50
    },
    {
      Date: "Nov 6",
      Orders: 40
    },
    {
      Date: "Nov 8",
      Orders: 90
    },
    {
      Date: "Nov 10",
      Orders: 20
    },
    {
      Date: "Nov 15",
      Orders: 90
    },
    {
      Date: "Nov 22",
      Orders: 20
    }
  ];

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
                          {menuItem === "Settings" &&
                            <React.Fragment>
                              <IconButton
                                aria-label="comments"
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
                                aria-label="comments"
                                
                              title="Comments"
                                onClick={() => {
                                  dispatch({
                                    type: "addToCart",
                                    payload: {}
                                  });
                                }}
                              >
                                {comments.length !== 0 ? "📬" : "📭"}
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
                                {data.reduce((p, i) => p + i.Orders, 0) <= 99
                                  ? data.reduce((p, i) => p + i.Orders, 0)
                                  : "+99"}
                              </IconButton>
                            </React.Fragment>}

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
                        {visable === menuItem
                          ? isMobile ? "➡️" : "⬇️"
                          : "👁️"}
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
                  {visable === "Settings" && <SettingDashboardContent />}
                  {visable === "Products" && <ProductDashboardContent />}
                  {visable === "Reports" && <ReportsDashboardContent />}
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

function ReportsDashboardContent() {
  const data = [
    {
      Date: "Nov 1",
      Orders: 10
    },
    {
      Date: "Nov 2",
      Orders: 50
    },
    {
      Date: "Nov 3",
      Orders: 30
    },
    {
      Date: "Nov 5",
      Orders: 50
    },
    {
      Date: "Nov 6",
      Orders: 40
    },
    {
      Date: "Nov 8",
      Orders: 90
    },
    {
      Date: "Nov 10",
      Orders: 20
    },
    {
      Date: "Nov 15",
      Orders: 90
    },
    {
      Date: "Nov 22",
      Orders: 20
    }
  ];

  return (
    <CardContent>
      <Typography component="h2" variant="title">
        Reports
      </Typography>
      <Divider sx={{ paddingBottom: ".75rem" }} />
      <Grid container padding={1} justifyContent="center" alignContent="center">
        <Grid item xs={12}>
          <BalanceChart data={data} />
        </Grid>
        <Grid item xs={12}>
          <Grid container padding={1} columnSpacing={3}>
            <Grid item xs={12} md={6}>
              <AccountCreated />
            </Grid>

            <Grid item xs={12} md={6}>
              <TopUsers />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ paddingBottom: ".75rem" }} />

      <Grid display="flex" justifyContent={"space-between"}>
        <Typography variant="h6">Recent Transactions</Typography>
      </Grid>
      <RecentTransactions />
    </CardContent>
  );
}

function ProductDashboardContent() {
  return (
    <CardContent>
      <Typography component="h2" variant="title">
        Products
      </Typography>
      <Divider />
    </CardContent>
  );
}

function SettingDashboardContent() {
  return (
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
      Shipping And Handling Policy Terms Of Use Policy Privacy Policy GDPR
      Policy Cookie Policy
      <Typography component="h3" variant="title">
        Language Settings
      </Typography>
      <Divider />
      <Table
        columns={[
          { id: "param", headerName: "" },
          { id: "language", headerName: "Language" },
          { id: "country", headerName: "Country" },
          { id: "code", headerName: "Code" }
        ]}
        rows={[
          {
            param: "Primary Language",
            language: "English",
            country: "US",
            code: "en_US"
          }
        ]}
      />
      <Typography component="h3" variant="title">
        Site Metadata
      </Typography>
      <Divider />
      <Table
        columns={[
          { id: "param", headerName: "" },
          { id: "value", headerName: "Value" }
        ]}
        rows={[
          {
            param: "Title",
            value: ""
          },
          {
            param: "Description",
            value: ""
          },
          {
            param: "Keywords",
            value: ""
          },
          {
            param: "Copyright",
            value: ""
          }
        ]}
      />
      <Typography component="h3" variant="title">
        Checkout Settings
      </Typography>
      <Divider />
      <Typography component="h4" variant="title">
        Payment Types
      </Typography>
      <Table
        columns={[
          { id: "param", headerName: "Payment Type" },
          { id: "value", headerName: "Status" }
        ]}
        rows={[
          {
            param: "Cryptocurrency",
            value: "Enabled | Disabled"
          },
          {
            param: "Credit Card",
            value: "Enabled | Disabled"
          }
        ]}
      />
      <Typography component="h4" variant="title">
        Cryptocurrency Payment Addresses
      </Typography>
      <Table
        columns={[
          { id: "param", headerName: "Chain" },
          { id: "value", headerName: "Address" }
        ]}
        rows={[
          {
            param: "Binance",
            value: "0x0"
          },
          {
            param: "Ethereum",
            value: "0x0"
          },
          {
            param: "Polygon",
            value: "0x0"
          },
          {
            param: "Gnosis",
            value: "0x0"
          }
        ]}
      />
      <Typography component="h4" variant="title">
        Default Payment Currency
      </Typography>
      <Table
        columns={[
          { id: "type", headerName: "Processor" },
          { id: "network", headerName: "Network" },
          { id: "currency", headerName: "Currency" }
        ]}
        rows={[
          {
            type: "crypto",
            network: "bnb",
            currency: "WIN"
          }
        ]}
      />
      <Typography component="h4" variant="title">
        Payment Currencies
      </Typography>
      <Table
        columns={[
          { id: "type", headerName: "Processor" },
          { id: "network", headerName: "Network" },
          { id: "currency", headerName: "Currency" }
        ]}
        rows={[
          {
            type: "credit-card",
            network: "nmi",
            currency: ["USD", "CAD"].join(" ")
          },
          {
            type: "crypto",
            network: "bnb",
            currency: ["BNB", "BUSD", "USDC", "USDT", "RKL", "WIN"].join(" ")
          },
          {
            type: "crypto",
            network: "eth",
            currency: ["ETH", "USDC", "RKL"].join(" ")
          },
          {
            type: "crypto",
            network: "polygon",
            currency: ["MATIC", "USDC", "MIMATIC", "RKL"].join(" ")
          },
          {
            type: "crypto",
            network: "xdai",
            currency: ["XDAI", "USDC", "RKL"].join(" ")
          }
        ]}
      />
      <Typography component="h3" variant="title">
        Storage Settings
      </Typography>
      <Divider />
      <Typography component="h4" variant="title">
        Product Listing Options
      </Typography>
      <ul>
        <li>Use Github For Product List </li>
        <li>Use API For Product</li>
        <li>List Use Winston For Product List</li>
        <li>Use Config File for Product List</li>
      </ul>
      <Typography component="h3" variant="title">
        Blockchain API Settings
      </Typography>
      <Divider />
      <Typography component="h3" variant="title">
        Wallet Settings
      </Typography>
      <Divider />
    </CardContent>
  );
}
