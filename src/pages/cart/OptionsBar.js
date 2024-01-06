import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { store } from "../../store";
import { Select } from "@mui/material";
import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import { Icon } from "@mui/material";
import { Button } from "@mui/material";
import { MenuItem } from "@mui/material";

export function OptionsBar(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  return (
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

                <CategorySelector />

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
                <IconButton size="small">clear</IconButton>
                {state.cartItems.length !== 0 &&
                  <span style={{ float: "right", marginTop: "6px" }}>
                    <IconButton
                      size="large"
                      onClick={() => {
                        dispatch({
                          type: "setCheckoutDisplayStep",
                          payload: 1
                        });
                      }}
                    >
                      <Icon>shopping_cart</Icon>
                    </IconButton>
                  </span>}
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}

function CategorySelector(props) {
  const appState = React.useContext(store);
  const { state } = appState;
  const [categorysLoaded, setCategorysLoaded] = React.useState(false);
  const [categoryOptions, setCategoryOptions] = React.useState([
    {
      key: "Category",
      value: "Category"
    }
  ]);

  React.useEffect(
    () => {
      let active = true;
      if (active && state.items.length > 1 && !categorysLoaded) {
        const categories = {};
        state.items.forEach(item => {
          if (!categories.hasOwnProperty(item.category)) {
            categories[item.category] = {
              name: item.category,
              subs: [item.subcategory]
            };
          } else {
            if (categories[item.category].subs.indexOf(item.subcategory) === -1)
              categories[item.category].subs.push(item.subcategory);
          }
        });
        // console.log(categories); //Keep! For reference later.
        setCategoryOptions(categories);
        setCategorysLoaded(true);
      }
      return () => {
        active = false;
      };
    },
    [
      state,
      categoryOptions,
      setCategoryOptions,
      categorysLoaded,
      setCategorysLoaded
    ]
  );

  return <SelectComponent options={categoryOptions} />;
}

function SelectComponent(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const categoryBase = {
    key: "Category",
    value: "Category"
  };
  const { options } = props;
  const categoryBaseOptions = [
    { ...categoryBase },
    ...Object.keys(options).map(option => ({
      key: option,
      value: option
    }))
  ];

  //replace this with the state object
  const [selectedCategoryOption, setSelectedCategoryOption] = React.useState(
    "Category"
  );

  const handleChange = value => {
    // setValue(value);
    setSelectedCategoryOption(value);
    dispatch({
      type: "setSelectedCategoryOption",
      payload: value
    });
    dispatch({
      type: "setPageItems",
      payload: state.items.filter(item => item.category === value)
    });
    console.log(value);
  };

  if (state.page.options === "Filter")
    return (
      <React.Fragment>
        <Select
          value={state.page.category}
          sx={{ marginRight: "8px", marginLeft: "16px" }}
          onChange={e => handleChange(e.target.value)}
          variant="outlined"
        >
          {categoryBaseOptions.map(option =>
            <MenuItem value={option.value} key={option.key}>
              {option.value}
            </MenuItem>
          )}
        </Select>
        {options[selectedCategoryOption] !== undefined &&
          options[selectedCategoryOption].hasOwnProperty("subs") &&
          <SubcategorySelect subs={options[selectedCategoryOption].subs} />}
      </React.Fragment>
    );
  if (state.page.options === "Sort") return <SortSelectOptions />;
  // in case its broken, it wont crash it.
  return null;
}

function SortSelectOptions(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;

  const handleChange = value => {
    //do something with the value
    //use the state.items to sort the state.page.items

    const { items } = state;
    if (state.page.category === "Category") {
      // just need to sort all the items.
      // determine what to sort and how
      if(value === 'none') {
        // no sorting need.
        dispatch({
          type: "setPageItems",
          payload: items
        });

      } else if(value === 'a') {
        // Sort A-Z
        dispatch({
          type: "setPageItems",
          payload: items.sort((a, b) => {
            console.log(a);
            // our lesser value
            if (a.title < b.title) return -1;// here we are using the whole title! Sort the whole thing!
            // our greater value
            if (a.title > b.title) return 1;
            return 0;
          })
        });
      } else {
        // Sort Z-A
        dispatch({
          type: "setPageItems",
          payload: items.sort((a, b) => {
            console.log(a);
            //determin what to sort and how
            // our lesser value
            if (a.title > b.title) return -1;
            // our greater value
            if (a.title < b.title) return 1;
            return 0;
          })
        });
      }
    } else {
      //ill need to filter the results
      let filteredItems = items.filter(item => item.category === state.page.category);
      if(state.page.subcategory !== 'Subcategory') {
        //lets filter subcategories too!
        filteredItems = items.filter(item => item.subcategory === state.page.subcategory);
      }
      if(value === 'none') {
        // no sorting need.
        dispatch({
          type: "setPageItems",
          payload: filteredItems
        });
      } else if(value === 'a') {
        // Sort A-Z
        dispatch({
          type: "setPageItems",
          payload: filteredItems.sort((a, b) => {
            console.log(a);
            // our lesser value
            if (a.title < b.title) return -1;// here we are using the whole title! Sort the whole thing!
            // our greater value
            if (a.title > b.title) return 1;
            return 0;
          })
        });
      } else {
        // Sort Z-A
        dispatch({
          type: "setPageItems",
          payload: filteredItems.sort((a, b) => {
            console.log(a);
            //determin what to sort and how
            // our lesser value
            if (a.title > b.title) return -1;
            // our greater value
            if (a.title < b.title) return 1;
            return 0;
          })
        });
      }
    }
    dispatch({
      type: "setSortType",
      payload: value
    });
    console.log(items);
  };

  // so we can sort our product in many ways, tags, title, description, category, subcategory
  // for now lets just sort the title
  return (
    <Select
      value={state.page.sortType}
      sx={{ marginRight: "8px", marginLeft: "16px" }}
      onChange={e => handleChange(e.target.value)}
      variant="outlined"
    >
      <MenuItem value={"none"}>None</MenuItem>
      <MenuItem value={"a"}>A-Z</MenuItem>
      <MenuItem value={"z"}>Z-A</MenuItem>
    </Select>
  );
}

function SubcategorySelect(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const subcategoryBase = {
    key: "Subcategory",
    value: "Subcategory"
  };
  const { subs } = props;
  const categoryBaseOptions = [
    { ...subcategoryBase },
    ...subs.map(sub => ({ key: sub, value: sub }))
  ];

  //replace with state object
  const [selectedCategoryOption, setSelectedCategoryOption] = React.useState(
    "Subcategory"
  );

  const handleChange = value => {
    // setValue(value);
    setSelectedCategoryOption(value);
    dispatch({
      type: "setSelectedSubcategoryOption",
      payload: value
    });

    dispatch({
      type: "setPageItems",
      payload: state.items.filter(item => item.subcategory === value)
    });
    console.log(value);
  };
  return (
    <Select
      value={state.page.subcategory}
      sx={{ marginRight: "8px", marginLeft: "16px" }}
      onChange={e => handleChange(e.target.value)}
      variant="outlined"
    >
      {categoryBaseOptions.map(option =>
        <MenuItem value={option.value} key={option.key}>
          {option.value}
        </MenuItem>
      )}
    </Select>
  );
}
