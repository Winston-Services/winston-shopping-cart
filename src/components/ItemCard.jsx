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
} from "@mui/material";
import { Box } from "@mui/system";
import FullWidthTabs from "./ItemTabs";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Tag(props) {
  const { children } = props;
  return (
    <Typography
      component="box"
      color="text.secondary"
      sx={{
        borderRadius: "6px",
        border: ".05rem solid red",
        margin: ".05rem",
        paddingX: ".15rem",
      }}
    >
      {children}
    </Typography>
  );
}
export default function ItemCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [showShare, setShowShare] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Card sx={{ borderRadius: "6px", width:"100%"}}>
      <CardHeader
        sx={{ paddingBottom: "10px" }}
        avatar={
          <Avatar
            sx={{
              bgcolor: "transparent",
              border: ".05rem dashed #e453c6",
              padding: "1rem",
              width: "56px",
              height: "56px",
            }}
            aria-label="category_brand_logo"
          >
            <img src={props.thumbnail} width="42px" />
          </Avatar>
        }
        action={
          props.admin ? (
            <IconButton aria-label="manage">
              <MoreVertIcon />
            </IconButton>
          ) : null
        }
        title={
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ cursor: "pointer", fontWeight: "800" }}
            onClick={() => {
              props.handleCartMethods.showProductItemDisplay();
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
                  fontWeight: "600",
                }}
              >
                {props.category}
              </Typography>
              <Typography
                variant="subtitle"
                color="text.secondary"
                sx={{
                  p: 1,
                  textDecoration: "underline dotted #b96dc9",
                  fontWeight: "500",
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
            <Paper
              color="secondary"
              sx={{ p: 2 }}
              align="center"
            >
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
              border: ".25rem solid #e86ca1",
              borderRight: ".45rem solid #e86ca1",
              borderLeft: ".45rem solid #e86ca1",
              borderRadius: "6px",
              minHeight: "115px",
              maxHeight: "115px",
              overflowY: "scroll",
            }}
          >
            {props.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                p: 1,
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
                  maxHeight: "175px",
                  backgroundColor: "#271d5a",
                }}
              >
                <TableBody>
                  <TableRow>
                    <TableCell variant="head">Retail Price</TableCell>

                    <TableCell align="right">$ {props.price} USD</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell variant="head">
                      <InputLabel id="currency-select-label">
                        Currency
                      </InputLabel>
                      <Select
                        labelId="currency-select-label"
                        id="currency-select"
                        value={currency}
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
                      {currency ? "0.000000000000000000" : "Select A Currency"}{" "}
                      {currency}
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
          {showShare && (
            <Grid item xs={12} textAlign="center">
              https://here/?productId={props.id}
            </Grid>
          )}
          <Grid item xs={12}>
            <IconButton
              aria-label="add to favorites"
              onClick={() => {
                props.handleCartMethods.favorites.indexOf(props.id) !== -1
                  ? props.handleCartMethods.removeFromFavorites()
                  : props.handleCartMethods.addToFavorites();
              }}
            >
              <FavoriteIcon
                sx={{
                  color:
                    props.handleCartMethods.favorites.indexOf(props.id) !== -1
                      ? "red"
                      : "white",
                }}
              />
            </IconButton>
            <IconButton
              aria-label="share"
              onClick={() => {
                setShowShare(!showShare);
              }}
            >
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="add-to-cart"
              onClick={() => {
                props.handleCartMethods.cartItems.indexOf(props.id) !== -1
                  ? props.handleCartMethods.removeFromCart()
                  : props.handleCartMethods.addToCart();
              }}
            >
              <AddShoppingCart
                sx={{
                  color:
                    props.handleCartMethods.cartItems.indexOf(props.id) !== -1
                      ? "#e454c4"
                      : "white",
                }}
              />
            </IconButton>
            <IconButton
              aria-label="add-to-wishlist"
              onClick={() => {
                props.handleCartMethods.wishlist.indexOf(props.id) !== -1
                  ? props.handleCartMethods.removeFromWishList()
                  : props.handleCartMethods.addToWishList();
              }}
            >
              <PlusOne
                sx={{
                  color:
                    props.handleCartMethods.wishlist.indexOf(props.id) !== -1
                      ? "#e97793"
                      : "white",
                }}
              />
            </IconButton>
            <span style={{ float: "right" }}>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </span>
          </Grid>
        </Grid>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{
            borderRadius: "3px",
            minHeight: "400px",
            maxHeight: "400px",
            overflowX: "scroll",
            padding: "0px",
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
                props.handleCartMethods.cartItems.indexOf(props.id) !== -1
                  ? props.handleCartMethods.removeFromCart()
                  : props.handleCartMethods.addToCart();
              }}
            >
              {props.handleCartMethods.cartItems.indexOf(props.id) !== -1
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
              p: "16px",
              borderRadius: "6px",
              backgroundColor: "#b86dc9",
            }}
          >
            <Typography paragraph>{props.description}</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              p: "16px",
              borderRadius: "6px 6px 0px 0px",
              backgroundColor: "#aa69d9",
            }}
          >
            <Typography component="subtitle">Cart Item Options</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              marginBottom: "6px",
              p: "16px",
              borderRadius: "0px 0px 6px 6px",
              backgroundColor: "#a266e3",
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
