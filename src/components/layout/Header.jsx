import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../resources/img/JVL_logo_PVT.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = require('./Header.less');

export default class Header extends React.Component {
	render() {
		const { title } = this.props;

		return (
			<AppBar position="static" color="default" className={styles.appBar}>
        <Toolbar>
          <img src={logo}  className={styles.logo} />
          <Typography component="h1" variant="h4" align="center">
                 {title}
          </Typography>
        </Toolbar>
      </AppBar>


		)
	}
}
