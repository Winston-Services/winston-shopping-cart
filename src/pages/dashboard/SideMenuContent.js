import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  TextField,
  InputAdornment
} from "@mui/material";
import BalanceChart from "../../components/BalanceChart";
import { orderDataRecords } from "./orderDataRecords";
import ProductSideMenuSearch from "./ProductSideMenuSearch";

export function SideMenuContent(props) {
  const handleScrollToView = name => {
    const dom = document.body.querySelector(name);
    dom.scrollIntoView(true);
  };
  const { name } = props;
  if (name === "Settings")
    return (
      <React.Fragment>
        <Typography
          paragraph
          onClick={() => {
            handleScrollToView('[name="General Settings"]');
          }}
          className="clickable"
        >
          General Settings
        </Typography>
        <Typography
          paragraph
          onClick={() => {
            handleScrollToView('[name="Language Settings"]');
          }}
          className="clickable"
        >
          Language Settings
        </Typography>
        <Typography
          paragraph
          onClick={() => {
            handleScrollToView('[name="Site Metadata"]');
          }}
          className="clickable"
        >
          Site Metadata
        </Typography>
        <Typography
          paragraph
          onClick={() => {
            handleScrollToView('[name="Checkout Settings"]');
          }}
          className="clickable"
        >
          Checkout Settings
        </Typography>
        <Typography
          paragraph
          onClick={() => {
            handleScrollToView('[name="Storage Settings"]');
          }}
          className="clickable"
        >
          Storage Settings
        </Typography>
        <Typography
          paragraph
          onClick={() => {
            handleScrollToView('[name="API Settings"]');
          }}
          className="clickable"
        >
          API Settings
        </Typography>
        <Typography
          paragraph
          onClick={() => {
            handleScrollToView('[name="Wallet Settings"]');
          }}
          className="clickable"
        >
          Wallet Settings
        </Typography>
      </React.Fragment>
    );

  if (name === "Products") return <ProductSideMenuSearch />;

  if (name === "Reports")
    return (
      <React.Fragment>
        <Grid
          container
          padding={1}
          justifyContent="center"
          alignContent="center"
        >
          <Grid item xs={12}>
            <BalanceChart data={orderDataRecords} />
            <BalanceChart data={orderDataRecords} />
            <BalanceChart data={orderDataRecords} />
            <BalanceChart data={orderDataRecords} />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  return null;
}
