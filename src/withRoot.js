import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';


// A theme with custom primary and secondary color.
// It's optional.
import "./styles/common.less";
import  rootTheme from './styles/theme';

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={rootTheme}>
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
