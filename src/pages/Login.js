import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';

import Button from '@material-ui/core/Button';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default class Login extends React.Component {
	state = {
		login: '',
		password: ''
	};

	render() {
		const { classes } = this.props;
		const { login } = this.state; 

		return (
			<div className={classes.root}>
				 {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
	        	<CssBaseline />
	        	<Header title="JVL CAS"/>
	        	<Footer />
			</div>
		);
	}



	validation() {

	}
}