/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Box,
  Badge,
  Collapse
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AddShoppingCart } from "@mui/icons-material";
import { store } from "../../store";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SettingDashboardContent } from "./SettingDashboardContent";
import { ReportsDashboardContent } from "./ReportsDashboardContent";
import { ProductDashboardContent } from "./ProductDashboardContent";
import { SideMenuContent } from "./SideMenuContent";

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
              // spacing={1}
            >
              <Grid item xs={12} md={3}>
                {["Settings", "Products", "Reports"].map(menuItem =>
                  <Card
                    key={`${menuItem}-dashboard-card`}
                    sx={{
                      borderRadius: "6px",
                      margin: "0.15rem",
                      paddingY: ".55rem"
                    }}
                    elevation={2}
                  >
                    <CardActions>
                      <Grid container display={"flex"} alignItems={"center"}>
                        <Grid item xs={12}>
                          {menuItem === "Settings" &&
                            <React.Fragment>
                              <IconButton
                                sx={{ marginX: "6px" }}
                                aria-label="comments"
                                size="small"
                                onClick={() => {
                                  dispatch({
                                    type: "addToFavorites",
                                    payload: {}
                                  });
                                }}
                              >
                                <Badge
                                  anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                  }}
                                  badgeContent={
                                    comments.length <= 99
                                      ? comments.length
                                      : "+99"
                                  }
                                >
                                  🗣️
                                </Badge>
                              </IconButton>
                              <IconButton
                                sx={{ marginX: "16px" }}
                                aria-label="comments"
                                size="small"
                                title="Comments"
                                onClick={() => {
                                  dispatch({
                                    type: "addToCart",
                                    payload: {}
                                  });
                                }}
                              >
                                <Badge
                                  badgeContent={
                                    comments.length <= 99
                                      ? comments.length
                                      : "+99"
                                  }
                                >
                                  {comments.length !== 0 ? "📬" : "📭"}
                                </Badge>
                              </IconButton>
                              <IconButton
                                size="small"
                                sx={{ marginX: "6px" }}
                                aria-label="add-to-wishlist"
                                onClick={() => {
                                  dispatch({
                                    type: "addToWishList",
                                    payload: {}
                                  });
                                }}
                              >
                                <Badge
                                  anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                  }}
                                  badgeContent={
                                    data.reduce((p, i) => p + i.Orders, 0) <= 99
                                      ? data.reduce((p, i) => p + i.Orders, 0)
                                      : "+99"
                                  }
                                >
                                  <AddShoppingCart />
                                </Badge>
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

                    <CardContent
                      sx={{ paddingX: ".15rem", paddingY: ".05rem" }}
                    >
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
                    <Collapse
                      in={expanded[menuItem]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <CardContent
                        sx={{
                          borderRadius: "3px",
                          maxHeight: menuItem === "Reports" ? "280px" : "200px",
                          overflowX: "clip",
                          overflowY: "scroll",
                          padding: "0px",
                          scrollbarColor: "red !important",
                          webkitScrollbar: {
                            width: "8px"
                          },
                          webkitScrollbarTrack: {
                            backgroundColor: "red !important",
                            borderRadius: "5px"
                          },
                          webkitScrollbarThumb: {
                            width: "5px",
                            backgroundColor: "green"
                          }
                        }}
                        m={0}
                        component={Box}
                        color="secondary"
                      >
                        <Grid
                          item
                          xs={12}
                          sx={{
                            marginBottom: "2px",
                            p: "8px",
                            borderRadius: "6px"
                            /* backgroundColor: "#b86dc9",*/
                          }}
                        >
                          <SideMenuContent name={menuItem} />
                        </Grid>
                      </CardContent>
                    </Collapse>
                  </Card>
                )}
              </Grid>
              <Grid item xs={12} md={9}>
                <Card
                  id={visable}
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
