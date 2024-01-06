import React from "react";
import {
  Paper,
  Typography, Box,
  Collapse,
  IconButton
} from "@mui/material";
import { Divider } from "@mui/material";

export function WalletSettings(props) {
  const [open, toggleOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Typography name="Wallet Settings" component="h3" variant="title">
        <IconButton
          size="small"
          onClick={() => {
            toggleOpen(!open);
          }}
        >
          {!open ? "➕" : "➖"}
        </IconButton>{" "}
        Wallet Settings{" "}
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
          sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }} />
      </Collapse>
    </React.Fragment>
  );
}
