import React from 'react';
import '../donor.css';

function Donor(props) {
	return (
		<li className="donor-item">
			<span className="donor-name">Name: {props.contributor.contributor_payee}</span>
			<span className="donor-sum">Amount: ${props.contributor.sum}</span>
		</li>
	)
}

export default Donor;