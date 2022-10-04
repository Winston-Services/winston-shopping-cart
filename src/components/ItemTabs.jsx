import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index &&
        <Box sx={{ p: 3 }}>
          {children}
        </Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}
const ReviewCard = props => {
  // console.log(props);
  return (
    <Grid item xs={12} sx={{ m: ".25rem" }}>
      <Paper elevation={3} sx={{ p: ".25rem" }}>
        <a href={`mailto:${props.review.commenterEmail}`}>
          {props.review.commenterName || "User"}
        </a>

        <Typography variant="subtitle2">
          {Array(props.review.rating).fill('🌟').join('')}<span style={{float:"right"}}>{props.review.rating} Stars</span>
        </Typography>

        <Typography>
        🗣️{props.review.comment}
        </Typography>
      </Paper>
    </Grid>
  );
};
export default function FullWidthTabs(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Product Overview" {...a11yProps(0)} />
          <Tab label="Product Information" {...a11yProps(1)} />
          <Tab label="Product Reviews" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Typography variant="subtitle1">
          {props.overview}
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Product Information
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Grid container display="block">
          <Grid item sm={12}>
            <Typography variant="subtitle1">Reviews</Typography>
          </Grid>
          {props.reviews.map((review, id) =>
            <ReviewCard review={review} key={`review-${id}`} />
          )}
        </Grid>
      </TabPanel>
    </Box>
  );
}
