import React from "react";

import { Typography, Grid } from "@mui/material";

import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

function BalanceChart(props) {
  const { data } = props;
  const color = [
    "#E9C46A",
    "#FFF3B0",
    "#ea7c8f",
    "#E76F51",
    "#FFBE0B",
    "#F08080",
    "#D86732",
    "#1d1751"
  ];
  let index = 7;
  return (
    <Grid container justifyContent={"center"}>
      <Grid
        key={"balanceChart" + index}
        item
        xs={12}
        sx={{
          height: "124px",
          padding: "6px",
          margin: "6px"
        }}
      >
        <Grid display="flex" alignItems={"center"} mb="1px">
          <Typography variant="subtitle1" fontWeight={500}>
            Orders
          </Typography>

          <Typography variant="subtitle2" fontWeight={300} sx={{ ml: 1.25 }}>
            {data.reduce((p, i) => p + i.Orders, 0)}
          </Typography>
        </Grid>

        <ResponsiveContainer maxHeight="150px">
          <AreaChart data={data} marginBottom="12px">
            <defs>
              <linearGradient id={"color" + 1} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color[2]} stopOpacity={0.8} />
                <stop offset="95%" stopColor={color[6]} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />

            <Area
              type="monotone"
              dataKey="Date"
              stroke={color[2]}
              fillOpacity={1.25}
              fill={`url(#color1)`}
            />
            <Area
              type="monotone"
              dataKey="Orders"
              stroke={color[3]}
              fillOpacity={1.25}
              fill={`url(#color1)`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
}

export default BalanceChart;
