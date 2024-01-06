import React from "react";
import { Typography, CardContent, Box, IconButton } from "@mui/material";
import { Divider } from "@mui/material";
import { LanguageSettings } from "./settings/LanguageSettings";
import { CheckoutSettings } from "./settings/CheckoutSettings";
import { BlockchainSettings } from "./settings/BlockchainSettings";
import { WalletSettings } from "./settings/WalletSettings";
import { StorageSettings } from "./settings/StorageSettings";
import { SiteMetaDataSettings } from "./settings/SiteMetaDataSettings";
import { GeneralSettings } from "./settings/GeneralSettings";

export function SettingDashboardContent() {
  const [ SettingsSections, setSettingSections] = React.useState([
    <GeneralSettings key="GeneralSettings"/>,
    <LanguageSettings key="LanguageSettings" />,
    <SiteMetaDataSettings key="SiteMetaDataSettings" />,
    <CheckoutSettings key="CheckoutSettings" />,
    <StorageSettings key="StorageSettings" />,
    <BlockchainSettings key="BlockchainSettings" />,
    <WalletSettings key="WalletSettings" />,
  ]);
  const slideSection = (way) => {
    // which way?
    if(way === 'back') {
      // lets go back one. 
      /**
       * take the last item and put it first.
       */
      const lastItem = SettingsSections.pop();
      setSettingSections([lastItem, ...SettingsSections]);
    } else {
      // lets go forwards one.
      /**
       * take the first item and put it last.
       */
       const firstItem = SettingsSections.shift();
       setSettingSections([...SettingsSections, firstItem]);
    }
  }
  return (
    <CardContent>
      <Typography component="h2" variant="title">
        Settings
      </Typography>
      <Typography variant="body1">
        Manage your cart preferences and settings.
        <span style={{ float: "right", marginTop: "-26px" }}>
          <IconButton size="small" onClick={() => slideSection('back')}>⬅️</IconButton>
          <IconButton size="small"  onClick={() => slideSection('forward')}>➡️</IconButton>{" "}
        </span>
      </Typography>
      <Divider
        component={Box}
        height="8px"
        sx={{ backgroundColor: "rgba(0,0,0,.15)" }}
      />
      {SettingsSections.map(SettingsSection => SettingsSection)}
    </CardContent>
  );
}
