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

import config from "../config";
import ReCAPTCHA from "react-google-recaptcha";
import { v4 } from "uuid";
import ItemCard from "../components/ItemCard";
import Logo from "../assets/logo.png";

export default function Dashboard() {
  const [email, setEmail] = useState("");
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
  const productIdNonce = new Set();
  const getProductId = () => {
    const id = v4();
    if (productIdNonce.has(id)) return getProductId();
    productIdNonce.add(id);
    return id;
  };
  const productList = [
    {
      id: getProductId(),
      title: "Membership Role",
      shortDescription: "Get a yearly membership role.",
      description:
        "Purchase your members role for the rickle server and link your account to get the role. This is a yearly membership and does not auto renew.",
      downloadable: true,
      thumbnail: Logo,
      images: [{ src: Logo, alt: "Winston Services Placeholder" }],
      category: "Subscriptions",
      subcategory: "Membership",
      overview:
        "Consequat culpa voluptate Lorem dolore aliquip sit pariatur. In do tempor reprehenderit sint excepteur labore est duis cillum. Do excepteur anim dolore ad nostrud fugiat mollit nisi. Occaecat deserunt consequat minim minim Lorem magna ex laborum reprehenderit nulla irure cillum. Deserunt excepteur sit enim fugiat exercitation ullamco elit tempor qui nulla cillum. Minim laboris pariatur eiusmod et enim incididunt occaecat cupidatat sint reprehenderit qui. Est incididunt ex dolor in enim fugiat proident pariatur officia aliquip duis.",
      reviews: [
        {
          comment: "Love the rewards",
          commenterName: "",
          commenterEmail: "",
          rating: 5,
        },
        {
          comment: "Love the rewards",
          commenterName: "",
          commenterEmail: "",
          rating: 3,
        },
        {
          comment: "Can't get it to work.",
          commenterName: "",
          commenterEmail: "",
          rating: 1,
        },
        {
          comment: "Love the rewards",
          commenterName: "",
          commenterEmail: "",
          rating: 5,
        },
      ],
      tags: ["subscriptions", "membership", "rickle"],
      shipsFrom: {
        address_1: "",
        address_2: "",
        address_3: "",
        address_4: "",
      },
      manufactures: [
        {
          name: "",
          address_1: "",
          address_2: "",
          address_3: "",
          address_4: "",
        },
      ],
      attributes: [{}],
      options: [
        {
          isDefault: true,
          name: "Duration",
          type: "ChooseOne",
          options: [
            {
              name: "Annual Members Role",
              value: "annual",
              label: "Annual Membership",
              acceptCurrencies: [
                "USDC",
                "BNB",
                "WBNB",
                "BUSD",
                "RICKLE",
                "WINSTON",
              ],
              price: "1.00",
              priceInUSD: "1.00",
            },
            {
              name: "Trial Members Role",
              value: "trial",
              label: "Trial Membership",
              acceptCurrencies: ["RICKLE", "WINSTON"],
              price: "1.60",
              priceInUSD: "1.60",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      {true ? (
        <Container sx={{ mt: "100px" }}>
          <Grid container display={"flex"} justifyContent={"center"}>
            {Array(12).fill(productList[0]).map((p) => {
                p.id = getProductId();
                return p;
              })
              .map((product) => (
                <Grid item sm={12} md={4} key={product.id}>
                  <Paper color="secondary" sx={{ p: ".25rem" }}>
                    <ItemCard
                      handleCartMethods={() => {
                        return { method_1: () => {}, method_2: () => {} };
                      }}
                      {...product}
                    />
                  </Paper>
                </Grid>
              ))}
          </Grid>
        </Container>
      ) : (
        <Container sx={{ mt: "100px" }}>
          <Grid container display={"flex"} alignItems={"center"}>
            <Grid item md={4}>
              Test Area Two
            </Grid>
            <Grid item md={8}>
              <Typography variant="h4">Coming soon</Typography>
              <Typography variant="subtitle2" mt={2}>
                {config.launchDescription}
              </Typography>
              <Grid container spacing={3}>
                <Grid item mt="50px">
                  <Paper color="secondary" sx={{ p: 2 }}>
                    <Typography fontSize={96} fontWeight={300}></Typography>
                  </Paper>
                  <Paper color="secondary" sx={{ py: 1, mt: "5px" }}>
                    <Typography variant="subtitle1" textAlign={"center"}>
                      Days left
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item mt="50px">
                  <Paper color="secondary" sx={{ p: 2 }}>
                    <Typography fontSize={96} fontWeight={300}></Typography>
                  </Paper>
                  <Paper color="secondary" sx={{ py: 1, mt: "5px" }}>
                    <Typography variant="subtitle1" textAlign={"center"}>
                      Hours left
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item mt="50px">
                  <Paper color="secondary" sx={{ p: 2 }}>
                    <Typography fontSize={96} fontWeight={300}></Typography>
                  </Paper>
                  <Paper color="secondary" sx={{ py: 1, mt: "5px" }}>
                    <Typography variant="subtitle1" textAlign={"center"}>
                      Minutes left
                    </Typography>
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
                    type={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email address"
                    variant="outlined"
                    placeholder="Enter email address"
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
      )}
    </>
  );
}
