import React from "react";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Typography, Box,
  Collapse,
  IconButton
} from "@mui/material";
import { Divider } from "@mui/material";
import Table from "../../../components/Table";
import { Switch } from "@mui/material";

export function CheckoutSettings(props) {
  const [open, toggleOpen] = React.useState(false);
  const [checked, setChecked] = React.useState({ 1: true, 2: true });
  const handleChange = (event, id) => {
    console.log(event.target.checked);
    setChecked({ ...checked, [id]: !checked[id] });
  };

  const OnOffSwitch = props => {
    return <Switch {...props} />;
  };
  const UIOnOffSwitch = styled(OnOffSwitch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be"
        }
      }
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2
    }
  }));

  return (
    <React.Fragment>
      <Typography name="Checkout Settings" component="h3" variant="title">
        <IconButton
          size="small"
          onClick={() => {
            toggleOpen(!open);
          }}
        >
          {!open ? "➕" : "➖"}
        </IconButton>{" "}
        Checkout Settings{" "}
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
          <Typography name="" component="h4" variant="title">
            Payment Types{" "}
            <span
              className="clickable"
              style={{ float: "right" }}
              title="Click the switch to tiggle the setting."
            >
              ℹ️
            </span>
          </Typography>
          <Divider
            component={Box}
            height="4px"
            sx={{ backgroundColor: "rgba(0,0,0,.15)" }} />
          <Paper
            variant="outlined"
            sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
          >
            <Table
              columns={[
                { id: "param", headerName: "Payment Type" },
                { id: "value", headerName: "Status" }
              ]}
              rows={[
                {
                  param: "Cryptocurrency",
                  value: (
                    <Typography>
                      Enabled{" "}
                      <UIOnOffSwitch
                        checked={checked[1]}
                        onClick={e => handleChange(e, "1")} />{" "}
                      Disabled
                    </Typography>
                  )
                },
                {
                  param: "Credit Card",
                  value: (
                    <Typography className="clickable">
                      Enabled{" "}
                      <UIOnOffSwitch
                        checked={checked[2]}
                        onChange={e => handleChange(e, "2")} />{" "}
                      Disabled
                    </Typography>
                  )
                }
              ]} />
          </Paper>

          <Typography name="" component="h4" variant="title">
            Cryptocurrency Payment Addresses{" "}
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
          <Paper
            variant="outlined"
            sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
          >
            <Table
              columns={[
                { id: "param", headerName: "Chain" },
                { id: "value", headerName: "Address" }
              ]}
              rows={[
                {
                  param: "Winston",
                  value: (
                    <Typography onClick={() => { }} className="clickable">
                      Not Set
                    </Typography>
                  )
                },
                {
                  param: "Binance",
                  value: (
                    <Typography onClick={() => { }} className="clickable">
                      Not Set
                    </Typography>
                  )
                },
                {
                  param: "Ethereum",
                  value: (
                    <Typography onClick={() => { }} className="clickable">
                      Not Set
                    </Typography>
                  )
                },
                {
                  param: "Polygon",
                  value: (
                    <Typography onClick={() => { }} className="clickable">
                      Not Set
                    </Typography>
                  )
                },
                {
                  param: "Gnosis",
                  value: (
                    <Typography onClick={() => { }} className="clickable">
                      Not Set
                    </Typography>
                  )
                },
                {
                  param: "Harmony One",
                  value: (
                    <Typography onClick={() => { }} className="clickable">
                      Not Set
                    </Typography>
                  )
                }
              ]} />
          </Paper>

          <Typography name="" component="h4" variant="title">
            Default Payment Currency{" "}
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
          <Paper
            variant="outlined"
            sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
          >
            <Table
              columns={[
                { id: "type", headerName: "Processor" },
                { id: "network", headerName: "Network" },
                { id: "currency", headerName: "Currency" }
              ]}
              rows={[
                {
                  type: "Crypto",
                  network: "Binance Smart Chain",
                  currency: "WIN"
                }
              ]} />
          </Paper>

          <Typography name="" component="h4" variant="title">
            Payment Currencies{" "}
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
          <Paper
            variant="outlined"
            sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
          >
            <Table
              columns={[
                { id: "type", headerName: "Processor" },
                { id: "network", headerName: "Network" },
                { id: "currency", headerName: "Currency" }
              ]}
              rows={[
                {
                  type: "Credit Card",
                  network: "NMI",
                  currency: ["USD", "CAD"].join(" ")
                },
                {
                  type: "Crypto",
                  network: "Binance Smart Chain",
                  currency: ["BNB", "BUSD", "USDC", "USDT", "RKL", "WIN"].join(
                    " "
                  )
                },
                {
                  type: "Crypto",
                  network: "Ethereum",
                  currency: ["ETH", "USDC", "RKL"].join(" ")
                },
                {
                  type: "Crypto",
                  network: "Polygon",
                  currency: ["MATIC", "USDC", "MIMATIC", "RKL"].join(" ")
                },
                {
                  type: "Crypto",
                  network: "Gnosis",
                  currency: ["XDAI", "USDC", "RKL"].join(" ")
                }
              ]} />
          </Paper>
        </Paper>
      </Collapse>
    </React.Fragment>
  );
}
