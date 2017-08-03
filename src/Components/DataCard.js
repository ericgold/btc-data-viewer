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
		this.getIndividualData = this.getIndividualData.bind(this);
		this.getBusinessData = this.getBusinessData.bind(this);

	}
	// fetch method to get data
	getIndividualData() {
		//const data = [];
		fetch('http://54.213.83.132/hackoregon/http/oregon_individual_contributors/5/')
								 .then(
										function(response) {
											return response.json();
										}
									).then(function(jsonData){
											// handle json data processing here
											const donorArray = JSON.parse(jsonData);
											//data.concat(donorArray);
										}
									).then(
										//console.log(data)
										console.log(donorArray)
									);

	}

	getBusinessData() {
		// http://54.213.83.132/hackoregon/http/oregon_business_contributors/5/
	}

	componentWillMount() {
		this.getIndividualData();
	}

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