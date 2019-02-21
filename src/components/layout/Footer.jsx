import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const styles = require('./Footer.less');

export default class Footer extends React.Component {
	render() {
		return (
			<div className={styles.footer}>
				<b>JVL Gaming</b>
				<div className="contacts-foot__col">
                        181 Whitehall Drive Markham,<br/>
                        Ontario, L3R 9T1, Canada<br/>
                        Location &#47; <Link href="#">Google Maps</Link>
                </div>
			</div>	
		)
	}
}