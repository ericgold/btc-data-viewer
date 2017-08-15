import React from 'react';

function SummaryItem(props) {
	return(
		<div>
			<h2>{props.title}</h2>
			<p>{props.amount}</p>
		</div>
	)
}

export default SummaryItem;