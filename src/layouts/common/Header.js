import React from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import Logo from "./../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import config from "../../config";

function Header() {
  const navigate = useNavigate();
  return (
    <Grid className="landingInGradient" py={2}>
      <Container>
        <Grid
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Grid>
            <Box
              component="img"
              src={Logo}
              alt="crypto"
              onClick={() => navigate("/")}
              sx={{ height: "47px" }}
            />
          </Grid>
          <Grid>
            {config.admin.length ? (
              <Button onClick={() => navigate("/sign-in")}>Sign-In</Button>
            ) : (
              <Button onClick={() => navigate("/setup")}>Setup</Button>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Header;
