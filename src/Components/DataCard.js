import React from 'react';
import DonorList from './DonorList';

class DataCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			donors: [
				{
					contributor_payee: "Loren Parks",
		 		 	sum: 874300
		 		},
		 		{
		 			contributor_payee: "John Arnold",
				 	sum: 500000
				},
		 		{
		 			contributor_payee: "Norman L Brenden",
		 		 	sum: 495000
	 			},
		 		{
		 			contributor_payee: "Loren E Parks",
		 		 	sum: 364173.58
		 		},
		 		{
		 			contributor_payee: "Philip Knight",
		 			sum: 355000
	 			}
	 		]
		};
	}
	render() {
		return(
			<div className="data-card">
				<h1>{this.props.title}</h1>
				<DonorList />
			</div>
		)
	}
}

export default DataCard;