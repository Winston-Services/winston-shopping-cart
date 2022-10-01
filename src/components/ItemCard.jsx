import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AddShoppingCart, PlusOne } from "@mui/icons-material";
import {
  Select,
  MenuItem,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Box
} from "@mui/material";
import FullWidthTabs from "./ItemTabs";
import { store } from "../store";

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

function Tag(props) {
  const { children } = props;
  return (
    <Box
      //component="Box"
      color="text.secondary"
      sx={{
        margin: ".05rem",
        paddingX: ".15rem",
        marginY: "1.75rem",
        display: "inline"
      }}
    >
      {children}
    </Box>
  );
}

export default function ItemCard(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const handleExpandClick = () => {
    dispatch({
      type: "setExpanded",
      payload: { 
        item: props.id,
        expanded: props.expanded
      }
    });
  };

  const handleChange = event => {
    dispatch({
      type: "setCurrency",
      payload: {
        currency: event.target.value,
        item: props.id
      }
    });
  };
  const categoryColors = {
    Ho: "#82c6b6",
    Sp: "#c69382",
    Cl: "#b2c682",
    El: "#92c682",
  };
  return (
    <Card sx={{ borderRadius: "6px", width: "100%" }}>
      <CardHeader
        sx={{ paddingBottom: "10px" }}
        avatar={
          <Avatar
            sx={{
              bgcolor: "transparent",
              border: ".05rem solid #e453c6",
              padding: "1rem",
              width: "56px",
              height: "56px",
              color: categoryColors[props.category.substring(0,2)]
            }}
            aria-label="category_brand_logo"
          >
            {props.category.substring(0,2)}
          </Avatar>
        }
        action={
          props.admin
            ? <IconButton aria-label="manage">
                <MoreVertIcon />
              </IconButton>
            : null
        }
        title={
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ cursor: "pointer", fontWeight: "800" }}
            onClick={() => {
              dispatch({
                type: "showProductItemDisplay",
                payload: {
                  item: props.id,
                  showItemGridDisplay: !state.showItemGridDisplay
                }
              });
            }}
          >
            {props.title}
          </Typography>
        }
        subheader={
          <Grid container display={"flex"}>
            <Grid item xs={12}>
              <Typography
                variant="title"
                color="text.secondary"
                sx={{
                  textDecoration: "underline dotted #a166e5",
                  fontWeight: "600"
                }}
              >
                {props.category}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  p: 1,
                  textDecoration: "underline dotted #b96dc9",
                  fontWeight: "500"
                }}
              >
                {props.subcategory}
              </Typography>
            </Grid>
          </Grid>
        }
      />
      <CardContent sx={{ paddingY: "3px", paddingX: "16px" }}>
        <Grid container alignItems={"center"}>
          <Grid item xs={12} textAlign="center">
            <Paper color="secondary" sx={{ p: 2 }} align="center" elevation={3}>
              <img
                src={props.images[0].src}
                width="190px"
                height="193.15px"
                alt={props.images[0].alt}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container display={"flex"} alignItems={"center"}>
          <Grid
            item
            xs={12}
            sx={{
              // border: ".25rem solid #e86ca1",
              // borderRight: ".45rem solid #e86ca1",
              // borderLeft: ".45rem solid #e86ca1",
              // borderRadius: "6px",
              minHeight: "115px",
              maxHeight: "115px",
              overflow: "hidden",
              marginY: ".25rem"
              // scrollbarColor: "green",
              // scrollbarWidth: ".25rem"
            }}
          >
            {props.tags.map(tag =>
              <Tag key={tag}>
                {tag}
              </Tag>
            )}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                p: 1
              }}
            >
              {props.shortDescription}
            </Typography>
          </Grid>
        </Grid>
        <Grid container display={"flex"} alignItems={"center"}>
          <Grid item xs={12} textAlign="center">
            <Paper color="secondary" sx={{ p: ".09rem" }}>
              <Table
                size="small"
                sx={{
                  p: "6px",
                  minHeight: "175px",
                  maxHeight: "175px"
                  /*backgroundColor: "#271d5a",*/
                }}
              >
                <TableBody>
                  <TableRow>
                    <TableCell variant="head">Retail Price</TableCell>

                    <TableCell align="right">
                      $ {props.price} USD
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell variant="head">
                      <InputLabel id="currency-select-label">
                        Currency
                      </InputLabel>
                      <Select
                        labelId="currency-select-label"
                        id="currency-select"
                        value={props.currency || ""}
                        label="Currency"
                        onChange={handleChange}
                        variant="standard"
                        fullWidth
                      >
                        <MenuItem value="BNB">BNB</MenuItem>
                        <MenuItem value="BUSD">BUSD</MenuItem>
                        <MenuItem value="USDC">USDC</MenuItem>
                        <MenuItem value="USDT">USDT</MenuItem>
                        <MenuItem value="WIN">WIN</MenuItem>
                        <MenuItem value="RKL">RKL</MenuItem>
                      </Select>
                    </TableCell>

                    <TableCell>
                      {props.currency
                        ? "0.000000000000000000"
                        : "Select A Currency"}{" "}
                      {props.currency}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container display={"flex"} alignItems={"center"}>
          {props.showShare &&
            <Grid item xs={12} textAlign="center">
              http://shop.winston.services/?productId={props.id}
            </Grid>}
          <Grid item xs={12}>
            <IconButton
              aria-label="add to favorites"
              onClick={() => {
                state.favorites.indexOf(props.id) !== -1
                  ? dispatch({ type: "removeFromFavorites", payload: props.id })
                  : dispatch({ type: "addToFavorites", payload: props.id });
              }}
            >
              <FavoriteIcon
                sx={{
                  color:
                    state.favorites.indexOf(props.id) !== -1 ? "red" : "white"
                }}
              />
            </IconButton>
            <IconButton
              aria-label="share"
              onClick={() => {
                dispatch({
                  type: "setShowShare",
                  payload: props.id
                });
              }}
            >
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="add-to-cart"
              onClick={() => {
                state.cartItems.indexOf(props.id) !== -1
                  ? dispatch({ type: "removeFromCart", payload: props.id })
                  : dispatch({ type: "addToCart", payload: props.id });
              }}
            >
              <AddShoppingCart
                sx={{
                  color:
                    state.cartItems.indexOf(props.id) !== -1
                      ? "#e454c4"
                      : "white"
                }}
              />
            </IconButton>
            <IconButton
              aria-label="add-to-wishlist"
              onClick={() => {
                state.wishlist.indexOf(props.id) !== -1
                  ? dispatch({ type: "removeFromWishList", payload: props.id })
                  : dispatch({ type: "addToWishList", payload: props.id });
              }}
            >
              <PlusOne
                sx={{
                  color:
                    state.wishlist.indexOf(props.id) !== -1
                      ? "#e97793"
                      : "white"
                }}
              />
            </IconButton>
            <span style={{ float: "right" }}>
              <ExpandMore
                expand={props.expanded}
                onClick={handleExpandClick}
                aria-expanded={props.expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </span>
          </Grid>
        </Grid>
      </CardActions>
      <Collapse in={props.expanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{
            borderRadius: "3px",
            minHeight: "400px",
            maxHeight: "400px",
            overflowX: "hidden",
            overflowY: "thin",
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
          m={2}
          component={Box}
          color="secondary"
        >
          <Grid align="center" sx={{ p: "6px", marginBottom: "6px" }}>
            <Button
              color="info"
              variant="outlined"
              onClick={() => {
                state.cartItems.indexOf(props.id) !== -1
                  ? dispatch({ type: "removeFromCart", payload: props.id })
                  : dispatch({ type: "addToCart", payload: props.id });
              }}
            >
              {state.cartItems.indexOf(props.id) !== -1
                ? "Remove From Cart"
                : "Add To Cart"}
            </Button>{" "}
            <Button color="success" variant="outlined">
              Buy Now
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              marginBottom: "6px",
              p: "8px",
              borderRadius: "6px"
              /* backgroundColor: "#b86dc9",*/
            }}
          >
            <Typography paragraph>
              {props.description}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              marginBottom: "6px",
              m: "8px",
              borderRadius: "0px 0px 6px 6px",
              backgroundColor: "#a266e3"
            }}
          >
            <FullWidthTabs
              overview={props.overview}
              reviews={props.reviews}
              manufactures={props.manufactures}
            />
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
