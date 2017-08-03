import React from 'react';
import Donor from './Donor';

function DonorList(props) {
	console.log(props);
		return (
		<ul className="donor-list">
				<Donor />
				<Donor />
				<Donor />
				<Donor />
				<Donor />
		</ul>
	)
}

export default DonorList;