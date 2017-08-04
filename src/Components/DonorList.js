import React from 'react';
import Donor from './Donor';

function DonorList(props) {
	
		return (
		<ul className="donor-list">
				{props.donors.map(donor => 
					<Donor key={donor.contributor_payee} contributor={donor} />
				)}
		</ul>
	)
}

export default DonorList;