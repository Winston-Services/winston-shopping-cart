/* eslint-disable jsx-a11y/anchor-is-valid */
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
import { Switch } from "@mui/material";

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
  const [checked, setChecked] = React.useState({ 1: true, 2: true });

  const handleChange = (event, id) => {
    console.log(event.target.checked);
    setChecked({ ...checked, [id]: !checked[id] });
  };

  const OnOffSwitch = props => {
    return <Switch {...props} />;
  };

  const UIOnOffSwitch = styled(OnOffSwitch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be"
        }
      }
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2
    }
  }));

  return (
    <CardContent>
      <Typography component="h2" variant="title">
        Settings
      </Typography>
      <Typography variant="body1">
        Manage your cart preferences and settings.
      </Typography>
      <Divider
        component={Box}
        height="8px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      <Typography component="h3" variant="title">
        General Settings
      </Typography>
      <Divider
        component={Box}
        height="4px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      <Paper
        variant="outlined"
        elevation={3}
        sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
      >
        <Table
          columns={[
            { id: "param", headerName: "Policy" },
            { id: "view", headerName: "View" },
            { id: "upload", headerName: "Upload" },
            { id: "download", headerName: "Download" }
          ]}
          rows={[
            {
              param: "Shipping And Handling Policy",
              view: <Button>View</Button>,
              upload: <Button>Upload</Button>,
              download: <Button>Download</Button>
            },
            {
              param: "Terms Of Use Policy",
              view: <Button>View</Button>,
              upload: <Button>Upload</Button>,
              download: <Button>Download</Button>
            },
            {
              param: "Privacy Policy",
              view: <Button>View</Button>,
              upload: <Button>Upload</Button>,
              download: <Button>Download</Button>
            },
            {
              param: "GDPR Policy",
              view: <Button>View</Button>,
              upload: <Button>Upload</Button>,
              download: <Button>Download</Button>
            },
            {
              param: "Cookie Policy",
              view: <Button>View</Button>,
              upload: <Button>Upload</Button>,
              download: <Button>Download</Button>
            }
          ]}
        />
      </Paper>
      <Typography component="h3" variant="title">
        Language Settings{" "}
        <span
          className="clickable"
          style={{ float: "right" }}
          title="Click the field to edit the value."
        >
          ℹ️
        </span>
      </Typography>
      <Divider
        component={Box}
        height="8px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      <Paper
        variant="outlined"
        elevation={3}
        sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
      >
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
              language: (
                <Typography onClick={() => {}} className="clickable">
                  English
                </Typography>
              ),
              country: (
                <Typography onClick={() => {}} className="clickable">
                  US
                </Typography>
              ),
              code: (
                <Typography onClick={() => {}} className="clickable">
                  en_US
                </Typography>
              )
            }
          ]}
        />
      </Paper>
      <Typography component="h3" variant="title">
        Site Metadata{" "}
        <span
          className="clickable"
          style={{ float: "right" }}
          title="Click the field to edit the value."
        >
          ℹ️
        </span>
      </Typography>
      <Divider
        component={Box}
        height="8px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      <Paper
        variant="outlined"
        elevation={3}
        sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
      >
        <Table
          columns={[
            { id: "param", headerName: "Setting" },
            { id: "value", headerName: "Value" }
          ]}
          rows={[
            {
              param: "Title",
              value: (
                <Typography onClick={() => {}} className="clickable">
                  Default Title
                </Typography>
              )
            },
            {
              param: "Description",
              value: (
                <Typography onClick={() => {}} className="clickable">
                  Default Description
                </Typography>
              )
            },
            {
              param: "Keywords",
              value: (
                <Typography onClick={() => {}} className="clickable">
                  Default Keywords
                </Typography>
              )
            },
            {
              param: "Copyright",
              value: (
                <Typography onClick={() => {}} className="clickable">
                  Default Copyright
                </Typography>
              )
            }
          ]}
        />
      </Paper>
      <Paper
        variant="outlined"
        elevation={3}
        sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
      >
        <Typography component="h3" variant="title">
          Checkout Settings{" "}
        </Typography>
        <Divider
          component={Box}
          height="8px"
          sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
        />

        <Typography component="h4" variant="title">
          Payment Types{" "}
          <span
            className="clickable"
            style={{ float: "right" }}
            title="Click the switch to tiggle the setting."
          >
            ℹ️
          </span>
        </Typography>
        <Divider
          component={Box}
          height="4px"
          sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
        />
        <Paper
          variant="outlined"
          elevation={3}
          sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
        >
          <Table
            columns={[
              { id: "param", headerName: "Payment Type" },
              { id: "value", headerName: "Status" }
            ]}
            rows={[
              {
                param: "Cryptocurrency",
                value: (
                  <Typography>
                    Enabled{" "}
                    <UIOnOffSwitch
                      checked={checked[1]}
                      onClick={e => handleChange(e, "1")}
                    />{" "}
                    Disabled
                  </Typography>
                )
              },
              {
                param: "Credit Card",
                value: (
                  <Typography className="clickable">
                    Enabled{" "}
                    <UIOnOffSwitch
                      checked={checked[2]}
                      onChange={e => handleChange(e, "2")}
                    />{" "}
                    Disabled
                  </Typography>
                )
              }
            ]}
          />
        </Paper>

        <Typography component="h4" variant="title">
          Cryptocurrency Payment Addresses{" "}
          <span
            className="clickable"
            style={{ float: "right" }}
            title="Click the field to edit the value."
          >
            ℹ️
          </span>
        </Typography>
        <Divider
          component={Box}
          height="4px"
          sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
        />
        <Paper
          variant="outlined"
          elevation={3}
          sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
        >
          <Table
            columns={[
              { id: "param", headerName: "Chain" },
              { id: "value", headerName: "Address" }
            ]}
            rows={[
              {
                param: "Winston",
                value: (
                  <Typography onClick={() => {}} className="clickable">
                    Not Set
                  </Typography>
                )
              },
              {
                param: "Binance",
                value: (
                  <Typography onClick={() => {}} className="clickable">
                    Not Set
                  </Typography>
                )
              },
              {
                param: "Ethereum",
                value: (
                  <Typography onClick={() => {}} className="clickable">
                    Not Set
                  </Typography>
                )
              },
              {
                param: "Polygon",
                value: (
                  <Typography onClick={() => {}} className="clickable">
                    Not Set
                  </Typography>
                )
              },
              {
                param: "Gnosis",
                value: (
                  <Typography onClick={() => {}} className="clickable">
                    Not Set
                  </Typography>
                )
              },
              {
                param: "Harmony One",
                value: (
                  <Typography onClick={() => {}} className="clickable">
                    Not Set
                  </Typography>
                )
              }
            ]}
          />
        </Paper>

        <Typography component="h4" variant="title">
          Default Payment Currency{" "}
          <span
            className="clickable"
            style={{ float: "right" }}
            title="Click the field to edit the value."
          >
            ℹ️
          </span>
        </Typography>
        <Divider
          component={Box}
          height="4px"
          sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
        />
        <Paper
          variant="outlined"
          elevation={3}
          sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
        >
          <Table
            columns={[
              { id: "type", headerName: "Processor" },
              { id: "network", headerName: "Network" },
              { id: "currency", headerName: "Currency" }
            ]}
            rows={[
              {
                type: "Crypto",
                network: "Binance Smart Chain",
                currency: "WIN"
              }
            ]}
          />
        </Paper>

        <Typography component="h4" variant="title">
          Payment Currencies{" "}
          <span
            className="clickable"
            style={{ float: "right" }}
            title="Click the field to edit the value."
          >
            ℹ️
          </span>
        </Typography>
        <Divider
          component={Box}
          height="4px"
          sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
        />
        <Paper
          variant="outlined"
          elevation={3}
          sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
        >
          <Table
            columns={[
              { id: "type", headerName: "Processor" },
              { id: "network", headerName: "Network" },
              { id: "currency", headerName: "Currency" }
            ]}
            rows={[
              {
                type: "Credit Card",
                network: "NMI",
                currency: ["USD", "CAD"].join(" ")
              },
              {
                type: "Crypto",
                network: "Binance Smart Chain",
                currency: ["BNB", "BUSD", "USDC", "USDT", "RKL", "WIN"].join(
                  " "
                )
              },
              {
                type: "Crypto",
                network: "Ethereum",
                currency: ["ETH", "USDC", "RKL"].join(" ")
              },
              {
                type: "Crypto",
                network: "Polygon",
                currency: ["MATIC", "USDC", "MIMATIC", "RKL"].join(" ")
              },
              {
                type: "Crypto",
                network: "Gnosis",
                currency: ["XDAI", "USDC", "RKL"].join(" ")
              }
            ]}
          />
        </Paper>
      </Paper>
      <Typography component="h3" variant="title">
        Storage Settings{" "}
        <span
          className="clickable"
          style={{ float: "right" }}
          title="Click the field to edit the value."
        >
          ℹ️
        </span>
      </Typography>
      <Divider
        component={Box}
        height="8px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      <Paper
        variant="outlined"
        elevation={3}
        sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
      >
        <Typography component="h4" variant="title">
          Product Listing Options{" "}
          <span
            className="clickable"
            style={{ float: "right" }}
            title="Click the field to edit the value."
          >
            ℹ️
          </span>
        </Typography>
        <Divider
          component={Box}
          height="4px"
          sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
        />
        <ul>
          <li>Use Github For Product List </li>
          <li>Use API For Product</li>
          <li>List Use Winston For Product List</li>
          <li>Use Config File for Product List</li>
        </ul>
      </Paper>
      <Typography component="h3" variant="title">
        Blockchain API Settings{" "}
        <span
          className="clickable"
          style={{ float: "right" }}
          title="Click the field to edit the value."
        >
          ℹ️
        </span>
      </Typography>
      <Divider
        component={Box}
        height="8px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />

      <Paper
        variant="outlined"
        elevation={3}
        sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
      />
      <Typography component="h3" variant="title">
        Wallet Settings{" "}
        <span
          className="clickable"
          style={{ float: "right" }}
          title="Click the field to edit the value."
        >
          ℹ️
        </span>
      </Typography>
      <Divider
        component={Box}
        height="8px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      <Paper
        variant="outlined"
        elevation={3}
        sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
      />
    </CardContent>
  );
}
