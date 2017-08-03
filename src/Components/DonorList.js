import React from 'react';
import Donor from './Donor';

function DonorList(props) {
	
		return (
		<ul className="donor-list">
				<Donor 
					name={props.donors[0].contributor_payee} 
					amount={props.donors[0].sum}
				/>
				<Donor 
					name={props.donors[1].contributor_payee} 
					amount={props.donors[1].sum}
				/>
				<Donor 
					name={props.donors[2].contributor_payee} 
					amount={props.donors[2].sum}
				/>
				<Donor 
					name={props.donors[3].contributor_payee} 
					amount={props.donors[3].sum}
				/>
				<Donor 
					name={props.donors[4].contributor_payee} 
					amount={props.donors[4].sum}
				/>
		</ul>
	)
}

export default DonorList;