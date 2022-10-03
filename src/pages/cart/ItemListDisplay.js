import React, { Suspense } from "react";
import { Box, CircularProgress, Container, Grid, Paper } from "@mui/material";
import ItemCard from "../../components/ItemCard";
import { store } from "../../store";
import { Select } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import { Icon } from "@mui/material";
import { Button } from "@mui/material";
import { MenuItem } from "@mui/material";
const categoryOptions = [
  {
    key: "Category",
    value: "Category"
  },
  {
    key: "Sports Gear",
    value: "Sports Gear"
  },
  {
    key: "Houseware",
    value: "Houseware"
  },
  {
    key: "Clothing",
    value: "Clothing"
  },
  {
    key: "Electronics",
    value: "Electronics"
  }
];

const subCategoryOptions = [
  {
    key: "Subcategory",
    value: "Subcategory"
  },
  {
    key: "Water Bottles",
    value: "Water Bottles"
  },
  {
    key: "Blankets",
    value: "Blankets"
  },
  {
    key: "T-Shirts",
    value: "T-Shirts"
  },
  {
    key: "Beenie's",
    value: "Beenie's"
  }
];
const pageOptionsBar = {
  Filter: {
    Select: [
      {
        value: "Category",
        placeholder: "Category",
        id: "Category-filter",
        options: [...categoryOptions]
      },
      {
        value: "Subcategory",
        placeholder: "Subcategory",
        id: "subcategory-filter",
        options: [...subCategoryOptions]
      }
    ]
  },
  Sort: {
    Select: [
      {
        value: "Category",
        placeholder: "Category",
        id: "Category-sort",
        options: [...categoryOptions]
      },
      {
        value: "Subcategory",
        placeholder: "Subcategory",
        id: "subcategory-sort",
        options: [...subCategoryOptions]
      }
    ]
  }
};
export function ItemListDisplay() {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const handlepageOptionsBarChange = (id, value) => {
    console.log(id, value);
    pageOptionsBar[state.page.options].Select[id].value = value;
  };
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
      <Container>
        <Grid container display={"flex"} spacing={1}>
          <Grid item xs={12}>
            <Box margin={2}>
              <Paper
                color="secondary"
                sx={{ p: ".15rem", width: "100%" }}
                elevation={6}
              >
                <Box margin={0.75}>
                  <Grid item xs={12}>
                    <Button
                      onClick={() => {
                        dispatch({
                          type: "togglePageOptionsBar",
                          payload:
                            state.page.options === "Filter" ? "Sort" : "Filter"
                        });
                      }}
                    >
                      {state.page.options}
                    </Button>
                    {"  "}
                    <Select
                      sx={{ marginRight: "8px", marginLeft: "16px" }}
                      defaultValue={
                        pageOptionsBar[state.page.options].Select[0].value
                      }
                      placeholder={
                        pageOptionsBar[state.page.options].Select[0].placeholder
                      }
                      onChange={e =>
                        handlepageOptionsBarChange(0, e.target.value)}
                      id={pageOptionsBar[state.page.options].Select[0].id}
                      variant="outlined"
                    >
                      <MenuItem value="Category">Category</MenuItem>
                      <MenuItem value="Sports">Sports Gear</MenuItem>
                      <MenuItem value="Houseware">Houseware</MenuItem>
                      <MenuItem value="Clothing">Clothing</MenuItem>
                      <MenuItem value="Electronics">Electronics</MenuItem>
                    </Select>
                    <Select
                      sx={{ marginX: "8px" }}
                      defaultValue={
                        pageOptionsBar[state.page.options].Select[1].value
                      }
                      placeholder={
                        pageOptionsBar[state.page.options].Select[1].placeholder
                      }
                      onChange={e =>
                        handlepageOptionsBarChange(1, e.target.value)}
                      id={pageOptionsBar[state.page.options].Select[1].id}
                      variant="outlined"
                    >
                      <MenuItem value="Subcategory">Subcategory</MenuItem>
                      <MenuItem value="Water Bottles">Water Bottles</MenuItem>
                      <MenuItem value="Blankets">Blankets</MenuItem>
                      <MenuItem value="T-Shirts">T-Shirts</MenuItem>
                      <MenuItem value="Beenie's">Beenie's</MenuItem>
                    </Select>
                    <TextField
                      sx={{ marginX: "8px" }}
                      name="Tags"
                      placeholder="Tags ie: sports"
                      variant="outlined"
                    />
                    <TextField
                      sx={{ marginX: "8px" }}
                      name="Search"
                      placeholder="Search ie: Winston Winter Fleece"
                      variant="outlined"
                    />
                    <IconButton size="large">
                      <Icon>close</Icon>
                    </IconButton>
                    {state.cartItems.length !== 0 &&
                      <span style={{ float: "right", marginTop: "6px" }}>
                        <IconButton size="large">
                          <Icon>shopping_cart</Icon>
                        </IconButton>
                      </span>}
                  </Grid>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
        <Grid container display={"flex"} spacing={1}>
          {state.items.map(product =>
            <Grid item xs={12} md={4} key={product.id}>
              <Paper color="secondary" sx={{ p: ".15rem" }}>
                <ItemCard {...product} />
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
    </Suspense>
  );
}
