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
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import withStyles from '@material-ui/core/styles/withStyles';

const stylesLess = require('./Login.less');
const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit *3 * 2 )]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    // backgroundImage: '-webkit-radial-gradient(100% 100%,ellipse farthest-side,#dbf6c8 20%,#1cafc6 50%,#012690 110%)',
    // backgroundImage: 'radial-gradient(ellipse farthest-side at 100% 100%,#dbf6c8 20%,#1cafc6 50%,#012690 110%)'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing.unit * 2,

    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 3,

    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    }
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit * 2
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },

  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  }

});

class Login extends React.Component {
	state = {
		login: '',
		password: ''
	};

	render() {
		const { classes } = this.props;
		const { login } = this.state;

		return (
			<React.Fragment>
				 {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
	        	<CssBaseline />
	        	<Header title="CAS"/>
            <main className={classes.main}>
              <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon/>
                </Avatar>
                <form className={classes.form}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="login">Login</InputLabel>
                    <Input id="login" name="login" autoComplete="login" autoFocus />
                  </FormControl>
                  <FormControl margin="normal" required  fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" name="password" type="password" autoComplete="current-password" />
                  </FormControl>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />


                  <Button type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                  >
                    Sign in
                  </Button>


                </form>
              </Paper>
            </main>


	        	<Footer />
      </React.Fragment>
		);
	}



	validation() {

	}
}

export default withStyles(styles)(Login)
