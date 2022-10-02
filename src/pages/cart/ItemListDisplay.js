import React, { Suspense } from "react";
import { Box, CircularProgress, Container, Grid, Paper } from "@mui/material";
import ItemCard from "../../components/ItemCard";
import { store } from "../../store";
import { Select } from "@mui/material";
import { Typography } from "@mui/material";
import { Input } from "@mui/material";
import { InputLabel } from "@mui/material";
import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import { Icon } from "@mui/material";

export function ItemListDisplay() {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
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
                  <Grid item xs={12} spacing={3}>
                    Filter {"  "}
                    <Select
                      sx={{ marginRight: "8px", marginLeft: "16px" }}
                      value="Category"
                      placeholder="Category"
                      id="category-filter"
                      variant="outlined"
                    >
                      <option value="Category">Category</option>
                      <option value="Sports Gear">Sports Gear</option>
                      <option value="Houseware">Houseware</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Electronics">Electronics</option>
                    </Select>
                    <Select
                      sx={{ marginX: "8px" }}
                      value="Subcategory"
                      placeholder="Subcategory"
                      id="subcategory-filter"
                      variant="outlined"
                    >
                      <option value="Subcategory">Subcategory</option>
                      <option value="Water Bottles">Water Bottles</option>
                      <option value="Blankets">Blankets</option>
                      <option value="T-Shirts">T-Shirts</option>
                      <option value="Beenie's">Beenie's</option>
                    </Select>
                    <TextField
                      sx={{ marginX: "8px" }}
                      name="Tags"
                      placeholder="Tags ie: sports"
                      variant="outlined"
                    />
                    <TextField
                      sx={{ marginX: "8px" }}
                      name="Tags"
                      placeholder="Tags ie: sports"
                      variant="outlined"
                    />
                    <span style={{ float: "right", marginTop: "6px" }}>
                      <IconButton size="large">
                        <Icon>shopping_cart</Icon>
                      </IconButton>
                    </span>
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
