import React, { useState } from "react";

import {
  Typography,
  Button,
  Input,
  Box,
  Link,
  TextField,
  Grid
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";

function SignIn(props) {
  const { register } = props;
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const login = () => {};
  if (register)
    return (
      <Container sx={{ mt: "100px", height: "60vh" }}>
        <Grid
          container
          justifyContent={"center"}
          alignContent={"center"}
          display={"flex"}
          spacing={1}
        >
          <Grid item xs={6}>
            <Typography variant="h2">Register</Typography>
            <Typography variant="h3" sx={{ mt: 2 }}>
              To manage your account.
            </Typography>
            {error &&
              <Paper
                elevation={4}
                sx={{
                  backgroundColor: "#31256C",
                  webkitTransition:
                    "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  transition:
                    "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  borderRadius: "6px",
                  boxShadow:
                    "0px 2px 6px -1px rgba(0,0,0,0.2),0px 6px 8px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
                  color: "ButtonText"
                }}
              >
                <Box padding={3} margin={1}>
                  <Typography>
                    <span style={{ color: "red", fontWeight: "800" }}>
                      Error :{" "}
                    </span>{" "}
                    <span style={{ marginLeft: "16px" }}>{error.message}</span>
                  </Typography>
                </Box>
              </Paper>}
            <Box component="div" sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                sx={{ mr: { xs: 1, md: 3 } }}
                fullWidth
              >
                Authenticate
              </Button>
            </Box>
            <Typography sx={{ mt: 2 }}>
              Already have an account?
              <Link
                underline="always"
                onClick={() => navigate("/sign-in")}
                sx={{ ml: 1 }}
              >
                Sign In
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  else
    return (
      <Container sx={{ mt: "100px", height: "60vh" }}>
        <Grid
          container
          justifyContent={"center"}
          alignContent={"center"}
          display={"flex"}
          spacing={1}
        >
          <Grid item xs={6}>
            <Typography variant="h2">Sign In</Typography>
            <Typography variant="h3" sx={{ mt: 2 }}>
              To manage your account.
            </Typography>

            <Box component="div" sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                sx={{ mr: { xs: 1, md: 3 } }}
                fullWidth
              >
                Authenticate
              </Button>
            </Box>
            <Typography sx={{ mt: 2 }}>
              Don’t have an account?
              <Link
                underline="always"
                onClick={() => navigate("/sign-up")}
                sx={{ ml: 1 }}
              >
                Let’s create one for you.
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
}

export default SignIn;
