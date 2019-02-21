import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { blue, blueGrey } from "@material-ui/core/colors";

const jvlTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: blueGrey,
    text: {
      primary: "#3C3C3C",
      secondary: "#4A4A4A",
      hint: "#7B7B7B"
    }
  },
  typography: {
    fontFamily: "Arial, monospace",
    fontSize: 20,
    useNextVariants: true
  },
  overrides: {
    MuiInputBase: {
      root: {
        background: "white"
      }
    },
    MuiSelect: {
      icon: {
        zoom: 2
      }
    },
    MuiCheckbox: {
      root: {
        fontSize: 48
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: "1em"
      }
    },
    MuiIcon: {
      root: {
        fontSize: "1em"
      }
    },
    MuiIconButton: {
      root: {
        padding: 0,
        fontSize: 48
      }
    },
    MuiFormLabel: {
      root: {
        lineHeight: 1
      }
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(14px, 14px) scale(1)"
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: "10.5px 14px"
      }
    },
    MuiStepper: {
      root: {
        padding: "0px 24px 8px"
      }
    },
    MuiStepIcon: {
      root: {
        fontSize: 32
      },
      text: {
        transform: "translate(0px, 3px)"
      }
    },
    MuiStepConnector: {
      alternativeLabel: {
        top: 32
      }
    },
    MuiStepLabel: {
      alternativeLabel: {
        marginTop: "8px !important"
      }
    },
    MuiExpansionPanel: {
      root: {
        background: "none",
        boxShadow: "none"
      },
      expanded: {}
    },
    MuiExpansionPanelSummary: {
      root: {
        background: "white",
        border: "1px solid gray",
        borderRadius: 3,
        boxShadow: "0 0 5px 1px silver"
      },
      content: {
        display: "flex",
        alignItems: "center"
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        background: "white",
        borderLeft: "1px solid gray",
        borderRight: "1px solid gray",
        borderBottom: "1px solid gray",
        borderRadius: 3,
        padding: 0
      }
    }
    // MuiInput: {
    //   root: {
    //     height: 80
    //   }
    // }
  }
});

export default jvlTheme;