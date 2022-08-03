/**
 * Copyright M.A.D. Computer Consulting LLC 2019
 *
 * @fileOverview src/components/common/theme-loader.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
import React from "react";

import { CssBaseline } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import PropTypes from "prop-types";

const altColor = {
  100: "#FBB46D",
  500: "#F17623",
  900: "#DC6226",
};

const errorColor = {
  500: "#F44336",
};

export default function ThemeLoader(props) {
  const themeColor = {
    typography: {
      fontFamily: ["Lato", "sans-serif"].join(","),
    },
    // shape: { borderRadius: '20px' },
    palette: {
      type: "dark",
      mode: "dark",
      winston: {
        main: "linear-gradient(92.44deg, #EA7A8F 3.93%, #E452C8 98.71%)",
        reverseMain: "linear-gradient(92.44deg, #E452C8 3.93%, #EA7A8F 98.71%)",
        dark: "#EA7A8F",
        light: "#E452C8",
        yellow: "#FFD215",
      },
      primary: {
        main: "#ffffff",
        dark: "#281e5c",
        light: "#47379e",
      },
      secondary: {
        main: "rgba(0,0,0,0)",
      },
      alt: {
        main: altColor[500],
        dark: altColor[900],
        light: altColor[100],
      },
      errorColor: {
        main: errorColor[500],
      },
      background: {
        default: "#271D5A",
        paper: "#31256C",
      },
    },
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            color: "#00a3ff",
          },
        },
      },
      MuiBadge: {
        styleOverrides: {
          colorPrimary: {
            background:
              "linear-gradient(180deg, #EA7A8F 0%, #E452C8 100%) !important",
            color: "white",
            // fontSize: 14,
            // fontWeight: 800,
            // width: 30,
            // height: 30,
            // borderRadius: 25,
            // left: '-5px',
          },
          colorSecondary: {
            background: "white",
            color: "black",
            // fontSize: 12,
            // width: 18,
            // height: 18,
            // borderRadius: 25,
            // left: '-12px',
          },
        },
      },
      MuiDrawer: {
        variants: [],
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
        variants: [
          {
            props: { color: "secondary" },
            style: {
              backgroundImage:
                "linear-gradient(180deg, #EA7A8F 0%, #E452C8 100%)",
            },
          },
          {
            props: { gradient: false },
            style: {
              backgroundImage: "none",
            },
          },
          {
            props: { opacity: "50" },
            style: {
              background: "rgba(39, 29, 90, 0.5)",
            },
          },
        ],
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            backgroundColor: "#31256C",
          },
        },
        variants: [
          {
            props: { expanded: true },
            style: {
              backgroundColor: "#382B78",
            },
          },
        ],
      },
      MuiTypography: {
        variants: [
          {
            props: { variant: "h1" },
            style: {
              fontWeight: "700",
            },
          },
          {
            props: { variant: "h2" },
            style: {
              fontWeight: "700",
            },
          },
          {
            props: { variant: "h3" },
            style: {
              fontWeight: "700",
            },
          },
          {
            props: { color: "inActive" },
            style: {
              color: "#DEDEDE",
            },
          },
          {
            props: { color: "link" },
            style: {
              color: "#3994E6",
            },
          },
        ],
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            padding: "0.8em 2em",
            boxSizing: "border-box",
            borderRadius: "28px",
            boxShadow: "none",
          },
        },
        variants: [
          {
            props: { variant: "contained", color: "secondary" },
            style: {
              background:
                "linear-gradient(92.44deg, #EA7A8F 3.93%, #E452C8 98.71%)",
            },
          },
          {
            props: { variant: "contained", color: "primary" },
            style: {
              background: "#31256C",
              color: "white",
              "&:hover": {
                background:
                  "linear-gradient(266.09deg, #E452C8 6.16%, #EA7A8F 94.97%)",
              },
            },
          },
        ],
      },
      MuiLink: {
        variants: [
          {
            props: { color: "primary" },
            style: {
              cursor: "pointer",
              textDecoration: "none",
              "&:hover": {
                color: "#FFD215",
              },
            },
          },
          {
            props: { color: "nav" },
            style: {
              color: "#ffffff",
              cursor: "pointer",
            },
          },
        ],
      },
      MuiChip: {
        variants: [
          {
            props: { variant: "outlined" },
            style: {
              borderColor: "#fff",
              padding: "1em 2em",
              height: "50px",
              borderRadius: "28px",
            },
          },
          {
            props: { variant: "filled" },
            style: {
              background: "#4F409A",
              padding: "6px",
              // borderRadius: '17px',
            },
          },
          {
            props: { color: "secondary" },
            style: {
              background:
                "linear-gradient(180deg, #EA7A8F 0%, #E452C8 100%) !important",
              padding: "6px",
            },
          },
          {
            props: { variant: "filled", color: "success" },
            style: {
              background: "#58A751",
              color: "white",
              padding: "6px",
            },
          },
          {
            props: { variant: "filled", color: "error" },
            style: {
              background: "#A75151",
              color: "white",
              padding: "6px",
            },
          },
        ],
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
        tabIndicatorStyle: {
          style: {
            background: "linear-gradient(90deg, #EA7A8F 0%, #E452C8 99.4%)",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderColor: "#5A5189",
          },
        },
      },
      MuiTextField: {
        variants: [
          {
            props: { variant: "outlined" },
            style: {
              fieldset: { borderRadius: "4px" },
            },
          },
          {
            props: { color: "filled" },
            style: {
              backgroundImage: "none",
              backgroundColor: "#31256C",
              padding: "8px 25px",
              borderRadius: "50px",
              height: "45px",
            },
          },
        ],
      },
      MuiCard: {
        styleOverrides: {
          root: { borderRadius: "20px" },
        },
      },
      MuiDivider: {
        variants: [
          {
            props: { orientation: "vertical" },
            style: {
              borderImageSlice: 1,
              borderImageSource:
                "linear-gradient(90deg, #EA7A8F 0.64%, #E452C8 99.36%)",
            },
          },
        ],
      },
      MuiDataGrid: {
        styleOverrides: {
          root: {
            border: "none",
          },
          footerContainer: {
            display: "none",
          },
          columnSeparator: {
            display: "none",
          },
          cell: {
            borderColor: "#564E7F",
          },
          columnHeaders: {
            borderColor: "#564E7F",
          },
        },
      },
      MuiGrid: {
        variants: [
          {
            props: { variant: "bottomBorder" },
            style: {
              borderBottom: "1px solid #5A5189",
            },
          },
        ],
      },
      MuiTooltip: {
        styleOverrides: {
          arrow: {
            color: "#f5f5f9",
          },
          tooltip: {
            background: "#f5f5f9",
            maxWidth: 220,
            color: "black",
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            border: "none",
          },
        },
      },
    },
  };
  const theme = responsiveFontSizes(createTheme(themeColor));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

ThemeLoader.propTypes = {
  children: PropTypes.element,
};
