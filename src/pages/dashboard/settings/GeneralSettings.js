import React from "react";
import {
  Button,
  Paper,
  Typography, Box,
  Collapse,
  IconButton
} from "@mui/material";
import { Divider } from "@mui/material";
import Table from "../../../components/Table";

export function GeneralSettings(props) {
  const [open, toggleOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Typography name="General Settings" component="h3" variant="title">
        <IconButton
          size="small"
          onClick={() => {
            toggleOpen(!open);
          }}
        >
          {!open ? "➕" : "➖"}
        </IconButton>{" "}
        General Settings
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
          <Table
            columns={[
              { id: "param", headerName: "Policy" },
              { id: "view", headerName: "View" },
              { id: "upload", headerName: "Upload" },
              { id: "download", headerName: "Download" }
            ]}
            rows={[
              {
                param: "Shipping And Handling Policy",
                view: <Button>View</Button>,
                upload: <Button>Upload</Button>,
                download: <Button>Download</Button>
              },
              {
                param: "Terms Of Use Policy",
                view: <Button>View</Button>,
                upload: <Button>Upload</Button>,
                download: <Button>Download</Button>
              },
              {
                param: "Privacy Policy",
                view: <Button>View</Button>,
                upload: <Button>Upload</Button>,
                download: <Button>Download</Button>
              },
              {
                param: "GDPR Policy",
                view: <Button>View</Button>,
                upload: <Button>Upload</Button>,
                download: <Button>Download</Button>
              },
              {
                param: "Cookie Policy",
                view: <Button>View</Button>,
                upload: <Button>Upload</Button>,
                download: <Button>Download</Button>
              }
            ]} />
        </Paper>
      </Collapse>
    </React.Fragment>
  );
}
