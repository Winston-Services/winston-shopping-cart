import React from "react";
import {
  Paper,
  Typography,
  Box,
  Collapse,
  IconButton,
  Grid,
  TextField,
  InputAdornment,
  Button,
  Select,
  MenuItem,
  InputLabel
} from "@mui/material";
import { Divider } from "@mui/material";
import Table from "../../../components/Table";
import { store } from "../../../store";

const TOKENS = [
  { label: "RKL", value: "RKL" },
  { label: "WIN", value: "WIN" },
  { label: "WBNB", value: "WBNB" },
  { label: "BUSD", value: "BUSD" },
  { label: "USDT", value: "USDT" },
  { label: "USDC", value: "USDC" },
  { label: "BTCB", value: "BTCB" }
];

export function BlockchainSettings(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const open = state.settings.blockchain.open;
  const toggleOpen = () => {
    dispatch({
      type: "toggleBlockchainSettingsSection",
      payload: !open
    });
  };
  return (
    <React.Fragment>
      <Typography name="Blockchain Settings" component="h3" variant="title">
        <IconButton
          size="small"
          onClick={() => {
            toggleOpen(!open);
          }}
        >
          {!open ? "➕" : "➖"}
        </IconButton>{" "}
        Blockchain Settings{" "}
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
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      <Collapse in={open}>
        <Paper
          variant="outlined"
          sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
        >
          <BlockchainDefaultNetworkSettings />
          <BlockchainTokenSettings />
          <BlockchainDexSettings />
          <BlockchainDexPairsSettings />
        </Paper>
      </Collapse>
    </React.Fragment>
  );
}

function SettingSectionComponent(props) {
  const { title, children } = props;
  return (
    <React.Fragment>
      <Typography component="h4" variant="title">
        {title}{" "}
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
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      <Paper
        variant="outlined"
        sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
      >
        {children}
      </Paper>
    </React.Fragment>
  );
}

function BlockchainDefaultNetworkSettings(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;

  return (
    <SettingSectionComponent title="Networks">
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography component="h4" variant="title">
            Default Payment Network{" "}
          </Typography>
          <Divider
            component={Box}
            height="4px"
            sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
          />

          <Table
            columns={[
              { id: "symbol", headerName: "Symbol" },
              { id: "chainId", headerName: "Chain Id" }
            ]}
            rows={state.settings.blockchain.defaultPaymentNetworks}
          />
        </Grid>
        <DefaultPaymentNetworkForm />
        <AddNetworkForm />
      </Grid>
    </SettingSectionComponent>
  );
}

function AddNetworkForm() {
  const appState = React.useContext(store);
  const { dispatch } = appState;
  const [networkName, setNetworkName] = React.useState("");
  const [networkSymbol, setNetworkSymbol] = React.useState("");
  const [networkChainId, setNetworkChainId] = React.useState("");
  const [rpcURL, setRpcUrl] = React.useState("");
  const [websocketUrl, setWebsocketUrl] = React.useState("");
  const [explorerUrl, setExplorerUrl] = React.useState("");
  const [explorerAPIKey, setExplorerAPIKey] = React.useState("");
  const [winstonUrl, setWinstonUrl] = React.useState("");
  const [winstonAPIKey, setWinstonAPIKey] = React.useState("");
  return (
    <Grid item xs={12}>
      <Typography component="h4" variant="title">
        Add Network
      </Typography>
      <Divider
        component={Box}
        height="4px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="caption" sx={{ margin: "0px" }}>
            The Basics
          </Typography>
          <Divider
            component={Box}
            height="6px"
            sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
          />
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            value={networkName}
            onChange={event => {
              setNetworkName(event.target.value);
            }}
            label="Network Name"
            type="text"
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            fullWidth
            value={networkSymbol}
            onChange={event => {
              setNetworkSymbol(event.target.value);
            }}
            label="Symbol"
            type="text"
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            fullWidth
            value={networkChainId}
            onChange={event => {
              setNetworkChainId(event.target.value);
            }}
            label="Chain Id"
            type="text"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption" sx={{ margin: "0px" }}>
            Server Connections
          </Typography>
          <Divider
            component={Box}
            height="6px"
            sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
          />
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            value={rpcURL}
            onChange={event => {
              setRpcUrl(event.target.value);
            }}
            label="RPC Url"
            type="text"
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            fullWidth
            value={websocketUrl}
            onChange={event => {
              setWebsocketUrl(event.target.value);
            }}
            label="Websocket Url"
            type="text"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption" sx={{ margin: "0px" }}>
            Explorer Connection
          </Typography>
          <Divider
            component={Box}
            height="6px"
            sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
          />
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            value={explorerUrl}
            onChange={event => {
              setExplorerUrl(event.target.value);
            }}
            label="Explorer Url"
            type="text"
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            fullWidth
            value={explorerAPIKey}
            onChange={event => {
              setExplorerAPIKey(event.target.value);
            }}
            label="Explorer API Key"
            type="text"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption" sx={{ margin: "0px" }}>
            Winston API Connection
          </Typography>
          <Divider
            component={Box}
            height="6px"
            sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
          />

          <TextField
            autoFocus
            margin="dense"
            fullWidth
            value={winstonUrl}
            onChange={event => {
              setWinstonUrl(event.target.value);
            }}
            label="API Url"
            type="text"
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            fullWidth
            value={winstonAPIKey}
            onChange={event => {
              setWinstonAPIKey(event.target.value);
            }}
            label="API Key"
            type="text"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Button
        fullWidth
        size="small"
        color="success"
        onClick={event => {
          dispatch({
            type: "addNetwork",
            payload: {
              name: networkName,
              symbol: networkSymbol,
              chainId: networkChainId,
              rpcURL,
              websocketUrl,
              explorerUrl,
              explorerAPIKey,
              winstonUrl,
              winstonAPIKey
            }
          });
        }}
      >
        Save
      </Button>
    </Grid>
  );
}

function DefaultPaymentNetworkForm(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const [selectedNetwork, setSelectedNetwork] = React.useState("");

  return (
    <Grid item xs={12} md={6}>
      <Typography component="h4" variant="title">
        Select Default Network
      </Typography>
      <Divider
        component={Box}
        height="4px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />

      <NetworkSelectComponent
        selectedNetwork={selectedNetwork}
        setSelectedNetwork={setSelectedNetwork}
        values={[{ label: "BNB", value: "BNB" }]}
      />

      <Button fullWidth size="small" color="success" onClick={event => {}}>
        Save
      </Button>
    </Grid>
  );
}

function BlockchainTokenSettings(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  return (
    <SettingSectionComponent title="Tokens">
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography component="h4" variant="title">
            Tokens{" "}
          </Typography>
          <Divider
            component={Box}
            height="4px"
            sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
          />
          <Table
            columns={[
              { id: "chainId", headerName: "Chain Id" },
              { id: "symbol", headerName: "Symbol" }
            ]}
            rows={[
              {
                chainId: 56,
                symbol: "WBNB"
              },
              {
                chainId: 56,
                symbol: "BUSD"
              },
              {
                chainId: 56,
                symbol: "USDC"
              },
              {
                chainId: 56,
                symbol: "USDT"
              },
              {
                chainId: 56,
                symbol: "RKL"
              },
              {
                chainId: 56,
                symbol: "WIN"
              }
            ]}
          />
        </Grid>
        <AddTokenForm />
      </Grid>
    </SettingSectionComponent>
  );
}

function AddTokenForm(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const [selectedNetwork, setSelectedNetwork] = React.useState("");

  const [tokenName, setTokenName] = React.useState("");
  const [tokenSymbol, setTokenSymbol] = React.useState("");
  const [tokenAddress, setTokenAddress] = React.useState("");
  return (
    <Grid item xs={12} md={6}>
      <Typography component="h4" variant="title">
        Add Token
      </Typography>
      <Divider
        component={Box}
        height="4px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      <Typography variant="caption" sx={{ margin: "0px" }}>
        Token Network
      </Typography>
      <Divider
        component={Box}
        height="6px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      <NetworkSelectComponent
        selectedNetwork={selectedNetwork}
        setSelectedNetwork={setSelectedNetwork}
        values={[{ label: "BNB", value: "BNB" }]}
      />

      <Typography variant="caption" sx={{ margin: "0px" }}>
        Contract Details
      </Typography>
      <Divider
        component={Box}
        height="6px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      <TextField
        autoFocus
        margin="dense"
        fullWidth
        value={tokenName}
        onChange={event => {
          setTokenName(event.target.value);
        }}
        label="Name"
        type="text"
        variant="standard"
      />

      <TextField
        autoFocus
        margin="dense"
        fullWidth
        value={tokenSymbol}
        onChange={event => {
          setTokenSymbol(event.target.value);
        }}
        label="Symbol"
        type="text"
        variant="standard"
      />

      <TextField
        autoFocus
        margin="dense"
        fullWidth
        value={tokenAddress}
        onChange={event => {
          setTokenAddress(event.target.value);
        }}
        label="Contract Address"
        type="text"
        variant="standard"
        placeholder="0x0"
      />
      <Button fullWidth size="small" color="success" onClick={event => {}}>
        Save
      </Button>
    </Grid>
  );
}

function NetworkSelectComponent(props) {
  const { selectedNetwork, setSelectedNetwork, values } = props;
  return (
    <Select
      fullWidth
      value={selectedNetwork}
      onChange={event => {
        setSelectedNetwork(event.target.value);
      }}
    >
      <MenuItem value="">Select One</MenuItem>
      {values.map(option =>
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      )}
    </Select>
  );
}

function BlockchainDexSettings(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const [dexs, setDexs] = React.useState([
    {
      chainId: 56,
      dex: "PancakeSwap"
    },
    {
      chainId: 56,
      dex: "SushiSwap"
    },
    {
      chainId: 56,
      dex: "ApeSwap"
    },
    {
      chainId: 1,
      dex: "SushiSwap"
    },
    {
      chainId: 1,
      dex: "UniSwap"
    }
  ]);
  return (
    <SettingSectionComponent title="Dexs">
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography component="h4" variant="title">
            Decentralized Exchange List{" "}
          </Typography>
          <Divider
            component={Box}
            height="4px"
            sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
          />
          <Table
            columns={[
              { id: "chainId", headerName: "Chain Id" },
              { id: "dex", headerName: "Exchange" }
            ]}
            rows={dexs}
          />
        </Grid>
        <AddDexForm />
      </Grid>
    </SettingSectionComponent>
  );
}

function AddDexForm(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const [selectedNetwork, setSelectedNetwork] = React.useState("");
  const [dexName, setDexName] = React.useState("");
  const [factoryAddress, setFactoryAddress] = React.useState("");
  const [routerAddress, setRouterAddress] = React.useState("");

  return (
    <Grid item xs={12} md={6}>
      <Typography component="h4" variant="title">
        Add DEX
      </Typography>
      <Divider
        component={Box}
        height="4px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      <Typography variant="caption" sx={{ margin: "0px" }}>
        Token Network
      </Typography>
      <Divider
        component={Box}
        height="6px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />

      <NetworkSelectComponent
        selectedNetwork={selectedNetwork}
        setSelectedNetwork={setSelectedNetwork}
        values={[{ label: "BNB", value: "BNB" }]}
      />

      <Typography variant="caption" sx={{ margin: "0px" }}>
        Dex Details
      </Typography>
      <Divider
        component={Box}
        height="6px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      <TextField
        autoFocus
        margin="dense"
        fullWidth
        value={dexName}
        onChange={event => {
          setDexName(event.target.value);
        }}
        label="Name"
        type="text"
        variant="standard"
      />
      <TextField
        autoFocus
        margin="dense"
        fullWidth
        value={factoryAddress}
        onChange={event => {
          setFactoryAddress(event.target.value);
        }}
        label="Factory Contract Address"
        type="text"
        variant="standard"
        placeholder="0x0"
      />
      <TextField
        autoFocus
        margin="dense"
        fullWidth
        value={routerAddress}
        onChange={event => {
          setRouterAddress(event.target.value);
        }}
        label="Router Contract Address"
        type="text"
        variant="standard"
        placeholder="0x0"
      />
      <Button fullWidth size="small" color="success" onClick={event => {}}>
        Save
      </Button>
    </Grid>
  );
}

function BlockchainDexPairsSettings(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const [pairs, setPairs] = React.useState([
    {
      chainId: 56,
      dex: "PancakeSwap",
      token0: "RKL\n 0.00000000",
      token1: "WBNB\n 0.00000000"
    },
    {
      chainId: 56,
      dex: "PancakeSwap",
      token0: "RKL\n 0.00000000",
      token1: "USDC\n 0.00000000"
    },
    {
      chainId: 56,
      dex: "PancakeSwap",
      token0: "RKL\n 0.00000000",
      token1: "USDT\n 0.00000000"
    },
    {
      chainId: 56,
      dex: "PancakeSwap",
      token0: "RKL\n 0.00000000",
      token1: "BUSD\n 0.00000000"
    }
  ]);
  return (
    <SettingSectionComponent title="Liquidity Pairs">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography component="h4" variant="title">
            Exchange Pairs{" "}
          </Typography>
          <Divider
            component={Box}
            height="4px"
            sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
          />

          <Table
            columns={[
              { id: "chainId", headerName: "Chain" },
              { id: "dex", headerName: "Exchange" },
              { id: "token0", headerName: "Token0" },
              { id: "token1", headerName: "Token1" }
            ]}
            rows={pairs}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography component="h4" variant="title">
            Add Pair
          </Typography>
          <Divider
            component={Box}
            height="4px"
            sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
          />
        </Grid>
        <AddDexPairForm />
      </Grid>
    </SettingSectionComponent>
  );
}

function AddDexPairForm(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const [selectedNetwork, setSelectedNetwork] = React.useState("");
  const [selectedToken0, setSelectedToken0] = React.useState("");
  const [selectedToken1, setSelectedToken1] = React.useState("");

  return (
    <React.Fragment>
      <Grid item xs={12} md={6}>
        <Typography variant="caption" sx={{ margin: "0px" }}>
          Dex Network
        </Typography>
        <Divider
          component={Box}
          height="6px"
          sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
        />

        <NetworkSelectComponent
          selectedNetwork={selectedNetwork}
          setSelectedNetwork={setSelectedNetwork}
          values={[{ label: "BNB", value: "BNB" }]}
        />
        <Typography variant="caption" sx={{ margin: "0px" }}>
          Exchange
        </Typography>
        <Divider
          component={Box}
          height="6px"
          sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
        />
        <Select fullWidth>
          <MenuItem>Select One</MenuItem>
          <MenuItem>PancakeSwap</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="caption" sx={{ margin: "0px" }}>
          Token 0
        </Typography>
        <Divider
          component={Box}
          height="6px"
          sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
        />
        <TokenSelectComponent
          value={selectedToken0}
          onChange={setSelectedToken0}
          values={TOKENS}
        />
        <Typography variant="caption" sx={{ margin: "0px" }}>
          Token 1
        </Typography>
        <Divider
          component={Box}
          height="6px"
          sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
        />
        <TokenSelectComponent
          value={selectedToken0}
          onChange={setSelectedToken0}
          values={TOKENS}
        />
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth size="small" color="success" onClick={event => {}}>
          Save
        </Button>
      </Grid>
    </React.Fragment>
  );
}

function TokenSelectComponent(props) {
  const { value, onChange, values } = props;
  return (
    <Select
      fullWidth
      value={value}
      onChange={event => {
        onChange(event.target.value);
      }}
    >
      <MenuItem>Select One</MenuItem>
      {values.map(option =>
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      )}
    </Select>
  );
}
