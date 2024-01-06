import React from "react";
import {
  Button, TextField,
  InputAdornment
} from "@mui/material";
import { store } from "../../store";

export function EditLanguageInput(props) {
  const appState = React.useContext(store);
  const { state, dispatch } = appState;
  const { toggleEditLanguage } = props;

  return (
    <TextField
      autoFocus
      margin="dense"
      id="language"
      fullWidth
      value={state.page.addProduct.dialogValue.title}
      onChange={event => dispatch({
        type: "setProductDialogValue",
        payload: {
          ...state.page.addProduct.dialogValue,
          title: event.target.value
        }
      })}
      label="Language"
      type="text"
      variant="standard"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button
              size="small"
              color="success"
              onClick={event => toggleEditLanguage(false)}
            >
              Save
            </Button>
          </InputAdornment>
        )
      }} />
  );
}
