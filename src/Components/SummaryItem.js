import React from 'react';
import '../summary-item.css';

function SummaryItem(props) {

	return(
		<div className="summary-item">
			<h2>{props.title}</h2>
			<p>${props.amount}</p>
		</div>
	)
}

export default SummaryItem;