import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import config from "../../config";
import ReCAPTCHA from "react-google-recaptcha";

export default function Dashboard() {
  const [address, setAddress] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [isLeadLoading, setIsLeadLoading] = useState(false);
  const [response, setResponse] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (captcha) {
      setIsLeadLoading(true);
      try {
        /*
        await apiInstance({
          method: "POST",
          path: "/users/lead",
          body: {
            email,
            winstonPreregister: true,
          },
        });
        */
        setResponse({
          isError: false,
          msg: "Your request has been sent.",
        });
        setIsLeadLoading(false);
      } catch (e) {
        setResponse({
          isError: true,
          msg: "Your request has not been sent.",
        });
        setIsLeadLoading(false);
      }
    }
  }

  function onChange(value) {
    setCaptcha(value);
  }

  return (
    <Container sx={{ mt: "100px" }}>
      <Grid container display="block">
        <Grid item md={4}>
          Setup Video Guide
        </Grid>
        <Grid item md={8}>
          <Typography variant="h4">Setup</Typography>
          <Typography variant="subtitle2" mt={2}>
            Welcome to the Winston Shopping Cart built to utilize blockchain
            technologies to enable a decentralized shopping expereince.
          </Typography>
          <Grid container spacing={3}>
            <Grid item mt="50px">
              <Paper color="secondary" sx={{ p: 2 }}>
                <Typography fontSize={96} fontWeight={300}>
                  Winston Defi Shopping Cart
                </Typography>
              </Paper>
              <Paper color="secondary" sx={{ py: 1, mt: "5px" }}>
                <Typography variant="subtitle1" textAlign={"center"}>
                  Winston; Your personal assistant to all things blockchain is
                  here to help you build the customer expereince expected from a
                  great platform utilzing blockchain technology.
                </Typography>
              </Paper>
            </Grid>
            <Grid item mt="50px">
              <Paper color="secondary" sx={{ p: 2 }}>
                
              </Paper>
            </Grid>
          </Grid>

          {response && !response.isError ? (
            <Typography variant="h6" mt={"100px"} mb={2}>
              Your request has been submitted.
            </Typography>
          ) : (
            <form onSubmit={(e) => handleSubmit(e)}>
              <Typography variant="h6" mt={"100px"} mb={2}>
                Get notified when we launch
              </Typography>
              <TextField
                fullWidth
                type={"text"}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                label="Admin Address"
                variant="outlined"
                placeholder="Enter your Wallet Address here."
                disabled={isLeadLoading}
                helperText={response.msg}
                error={response.isError}
                required
              />
              <Grid mt={3}>
                <ReCAPTCHA
                  sitekey="6LdF4tkfAAAAAIlIBwHPLAH6oU9jtVIRB8Cn5FO9"
                  onChange={onChange}
                />
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{ mt: "30px" }}
                disabled={!captcha || isLeadLoading}
              >
                {isLeadLoading ? (
                  <CircularProgress size={24} sx={{ mr: 2 }} />
                ) : null}
                Submit
              </Button>
            </form>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
