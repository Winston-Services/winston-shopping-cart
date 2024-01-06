import React from "react";
import {
  Paper,
  Typography, Box,
  Collapse,
  IconButton
} from "@mui/material";
import { Divider } from "@mui/material";

export function StorageSettings(props) {
  const [open, toggleOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Typography name="Storage Settings" component="h3" variant="title">
        <IconButton
          size="small"
          onClick={() => {
            toggleOpen(!open);
          }}
        >
          {!open ? "➕" : "➖"}
        </IconButton>{" "}
        Storage Settings{" "}
        {open &&
          <span
            className="clickable"
            style={{ float: "right" }}
            title="Click the field to edit the value."
          >
            ℹ️
          </span>}
      </Typography>
      <Divider
        component={Box}
        height="8px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }} />
      <Collapse in={open}>
        <Paper
          variant="outlined"
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
            sx={{ backgroundColor: "rgba(0,0,0,.15)" }} />
          <ul>
            <li>Use Github For Product List </li>
            <li>Use API For Product</li>
            <li>List Use Winston For Product List</li>
            <li>Use Config File for Product List</li>
          </ul>
        </Paper>
      </Collapse>
    </React.Fragment>
  );
}
