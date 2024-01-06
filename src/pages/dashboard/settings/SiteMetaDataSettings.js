import React from "react";
import {
  Paper,
  Typography,
  Box,
  Collapse,
  IconButton,
  Icon,
  TextField,
  InputAdornment,
  Button
} from "@mui/material";
import { Divider } from "@mui/material";
import Table from "../../../components/Table";
import { store } from "../../../store";

export function SiteMetaDataSettings(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;

  const toggleOpen = () => {
    dispatch({
      type: "toggleSettingsTab",
      payload: {
        target: "siteMetadata",
        value: !state.settings.siteMetadata.open
      }
    });
  };

  const [editing, toggleEditing] = React.useState({
    Title: false,
    Description: false,
    Keywords: false,
    Copyright: false
  });

  const handleEdit = target => {
    // console.log(target);
    toggleEditing({ [target]: !editing[target] });
  };

  const handleSave = (target, value) => {
    console.log(target, value);
    dispatch({
      type: "saveSiteMetadata",
      payload: {
        target,
        value
      }
    });
  };

  return (
    <React.Fragment>
      <Typography name="Site Metadata" component="h3" variant="title">
        <IconButton
          size="small"
          onClick={() => {
            toggleOpen(); // changed this to state
          }}
        >
          {!state.settings.siteMetadata.open ? "➕" : "➖"}
        </IconButton>{" "}
        Site Metadata{" "}
        {state.settings.siteMetadata.open &&
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
      <Collapse in={state.settings.siteMetadata.open}>
        <Paper
          variant="outlined"
          sx={{ paddingX: "16px", paddingY: "8px", marginY: "4px" }}
        >
          <Table
            columns={[
              { id: "param", headerName: "Setting" },
              { id: "value", headerName: "Value" }
            ]}
            rows={[
              {
                param: "Title",
                value: editing.Title
                  ? <BasicInput
                      value={state.settings.siteMetadata.title}
                      handleClose={handleEdit.bind(this, "Title")}
                      handleSave={handleSave.bind(this, "title")}
                    />
                  : <Typography
                      onClick={() => {
                        handleEdit("Title");
                      }}
                      className="clickable"
                    >
                      {state.settings.siteMetadata.title}
                    </Typography>
              },
              {
                param: "Description",
                value: editing.Description
                  ? <BasicInput
                      value={state.settings.siteMetadata.description}
                      handleClose={() => {
                        handleEdit("Description");
                      }}
                      handleSave={handleSave.bind(this, "description")}
                    />
                  : <Typography
                      onClick={() => {
                        handleEdit("Description");
                      }}
                      className="clickable"
                    >
                      {state.settings.siteMetadata.description}
                    </Typography>
              },
              {
                param: "Keywords",
                value: editing.Keywords
                  ? <BasicInput
                      value={state.settings.siteMetadata.keywords}
                      handleClose={() => {
                        handleEdit("Keywords");
                      }}
                      handleSave={handleSave.bind(this, "keywords")}
                    />
                  : <Typography
                      onClick={() => {
                        handleEdit("Keywords");
                      }}
                      className="clickable"
                    >
                      {state.settings.siteMetadata.keywords}
                    </Typography>
              },
              {
                param: "Copyright",
                value: editing.Copyright
                  ? <BasicInput
                      value={state.settings.siteMetadata.copyright}
                      handleClose={() => {
                        handleEdit("Copyright");
                      }}
                      handleSave={handleSave.bind(this, "copyright")}
                    />
                  : <Typography
                      onClick={() => {
                        handleEdit("Copyright");
                      }}
                      className="clickable"
                    >
                      {state.settings.siteMetadata.copyright}
                    </Typography>
              }
            ]}
          />
        </Paper>
      </Collapse>
    </React.Fragment>
  );
}

function BasicInput(props) {
  const [value, setValue] = React.useState(props.value);
  const handleChange = value => {
    setValue(value);
  };

  const handleSave = () => {
    props.handleSave(value); //pass the value back up.
    props.handleClose(); //close the editable item.
  };

  return (
    <TextField
      autoFocus
      margin="dense"
      id={props.id}
      fullWidth
      value={value}
      onChange={event => handleChange(event.target.value)}
      label={props.label}
      type="text"
      variant="standard"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button
              size="small"
              color="success"
              onClick={event => handleSave()}
            >
              <small><Icon>save_file</Icon></small>
            </Button>
          </InputAdornment>
        )
      }}
    />
  );
}
