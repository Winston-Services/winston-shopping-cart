import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, Paper, Skeleton, Typography, Box, Badge, IconButton } from "@mui/material";
import { store } from "../../store";

export function AddProductContent() {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const productItem = state.items[0];
  function setDialogValue(value) {
    dispatch({
      type: "setProductDialogValue",
      payload: value
    });
  }
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems="center"
      spacing={2}
    >
      <Grid item md={4} textAlign="center" alignItems={"center"}>
        {productItem && !productItem.images[0]
          ? <Skeleton
              animation="wave"
              variant="rounded"
              width={350}
              height={350}
            />
          : <React.Fragment>
              <Typography variant="subtitle1" mt={0}>
                {productItem.title}
              </Typography>
              <Paper sx={{ margin: "6px" }} elevation={6}>
                <Box sx={{ padding: "6px" }}>
                  <Badge badgeContent={<IconButton size="small">X</IconButton>}>
                    <img
                      src={productItem.images[0].src}
                      alt="Product #"
                      width={"100%"}
                      height={"100%"}
                      style={{ padding: "16px", paddingTop: "18px" }}
                    />
                  </Badge>
                  <Button>Upload</Button>
                </Box>
              </Paper>
            </React.Fragment>}
      </Grid>
      <Grid item md={8}>
        <Grid container spacing={3}>
          <Grid item md={8}>
            <Typography
              variant="subtitle1"
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
                {productItem.category}{" "}
              </span>

              <span
                style={{
                  marginLeft: "16px"
                }}
              >
                <small>
                  {productItem.subcategory}
                </small>
              </span>
            </Typography>
            <Typography variant="body1" mt={2}>
              {productItem.description}
            </Typography>
          </Grid>
          <Grid item md={8}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={state.page.addProduct.dialogValue.title}
              onChange={event =>
                setDialogValue({
                  ...state.page.addProduct.dialogValue,
                  title: event.target.value
                })}
              label="title"
              type="text"
              variant="standard"
            />
            <TextField
              margin="none"
              id="name"
              value={state.page.addProduct.dialogValue.year}
              onChange={event =>
                setDialogValue({
                  ...state.page.addProduct.dialogValue,
                  year: event.target.value
                })}
              label="year"
              type="number"
              variant="standard"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
