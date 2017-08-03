import React from 'react';
import DonorList from './DonorList';

class DataCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			person: {
				name: "Eric Gold",
				amount: 100
			},
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
	// fetch method to get data
	render() {
		return(
			<div className="data-card">
				<h1>{this.props.title}</h1>
				<DonorList donors={this.state.donors}/>
			</div>
		)
	}
}

export default DataCard;