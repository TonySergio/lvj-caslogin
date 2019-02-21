import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../resources/img/JVL_logo_PVT.png';

const styles = require('./Header.less');

export default class Header extends React.Component {
	render() {
		const { title } = this.props;

		return (
			<div className={styles.header}>
				<img src={logo}  className={styles.logo} />
				{title}
			</div>	
		)
	}
}