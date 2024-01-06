import React from "react";
import {
  Paper,
  Typography, Box,
  Collapse,
  IconButton
} from "@mui/material";
import { Divider } from "@mui/material";
import Table from "../../../components/Table";
import { EditLanguageInput } from "../EditLanguageInput";

export function LanguageSettings(props) {
  const [open, toggleOpen] = React.useState(false);
  const [editLanguage, toggleEditLanguage] = React.useState(false);

  return (
    <React.Fragment>
      <Typography name="Language Settings" component="h3" variant="title">
        <IconButton
          size="small"
          onClick={() => {
            toggleOpen(!open);
          }}
        >
          {!open ? "➕" : "➖"}
        </IconButton>{" "}
        Language Settings{" "}
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
          {editLanguage
            ? <Table
              columns={[
                { id: "param", headerName: "" },
                { id: "language", headerName: "Language" }
              ]}
              rows={[
                {
                  param: "Primary Language",
                  language: (
                    <EditLanguageInput
                      toggleEditLanguage={toggleEditLanguage.bind(this)} />
                  )
                }
              ]} />
            : <Table
              columns={[
                { id: "param", headerName: "" },
                { id: "language", headerName: "Language" },
                { id: "country", headerName: "Country" },
                { id: "code", headerName: "Code" }
              ]}
              rows={[
                {
                  param: "Primary Language",
                  language: (
                    <Typography
                      onClick={() => {
                        toggleEditLanguage(!editLanguage);
                      }}
                      className="clickable"
                    >
                      English
                    </Typography>
                  ),
                  country: (
                    <Typography
                      onClick={() => {
                        toggleEditLanguage(!editLanguage);
                      }}
                      className="clickable"
                    >
                      US
                    </Typography>
                  ),
                  code: (
                    <Typography
                      onClick={() => {
                        toggleEditLanguage(!editLanguage);
                      }}
                      className="clickable"
                    >
                      en_US
                    </Typography>
                  )
                }
              ]} />}
        </Paper>
      </Collapse>
    </React.Fragment>
  );
}
