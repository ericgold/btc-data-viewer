import React from 'react';

function Donor(props) {
	return (
		<li>
			<span>Name: {props.name}</span>
			<span>Amount: {props.amount}</span>
		</li>
	)
}

export default Donor;