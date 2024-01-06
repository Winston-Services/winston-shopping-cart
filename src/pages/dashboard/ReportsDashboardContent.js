import React from "react";
import { Grid, Typography, CardContent } from "@mui/material";
import { Divider } from "@mui/material";
import AccountCreated from "../../components/AccountCreated";
import RecentTransactions from "../../components/RecentTransactions";
import TopUsers from "../../components/TopUsers";
import BalanceChart from "../../components/BalanceChart";
import { orderDataRecords } from "./orderDataRecords";

export function ReportsDashboardContent() {
  return (
    <CardContent>
      <Typography component="h2" variant="title">
        Reports
      </Typography>
      <Divider sx={{ paddingBottom: ".75rem" }} />
      <Grid container padding={1} justifyContent="center" alignContent="center">
        <Grid item xs={12}>
          <BalanceChart data={orderDataRecords} />
        </Grid>
        <Grid item xs={12}>
          <Grid container padding={1} columnSpacing={3}>
            <Grid item xs={12} md={6}>
              <AccountCreated />
            </Grid>

            <Grid item xs={12} md={6}>
              <TopUsers />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ paddingBottom: ".75rem" }} />

      <Grid display="flex" justifyContent={"space-between"}>
        <Typography variant="h6">Recent Transactions</Typography>
      </Grid>
      <RecentTransactions />
    </CardContent>
  );
}
