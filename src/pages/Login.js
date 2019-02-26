import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';

import Button from '@material-ui/core/Button';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = require('./Login.less');

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

            <Paper className={styles.paper}>
              <form className={styles.form}>
                <FormControl required margin="normal" fullWidth>
                  <InputLabel htmlFor="login">Login</InputLabel>
                  <Input id="login" name="login" autoComplete="email" autoFocus />
                </FormControl>
                <FormControl required margin="normal" fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input id="password" name="password" type="password" autoComplete="current-password" />
                </FormControl>
                <FormControl>
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                </FormControl>

                <Button type="submit"
                        fullwidth
                        variant="contained"
                        color="primary"
                >
                  Sign in
                </Button>


              </form>
            </Paper>


	        	<Footer />
			</div>
		);
	}



	validation() {

	}
}
