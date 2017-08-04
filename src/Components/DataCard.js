import React from 'react';
import DonorList from './DonorList';

class DataCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			donors: []
		};
		this.getData = this.getData.bind(this);
	}
	// fetch method to get data
	getData(url) {
		return fetch(url, {})
								 .then(response => response.json())
								 .then(jsonData => this.setState({ donors: jsonData }))
								 .catch(error => console.log(error));
	}
	
	componentDidMount(props) { 
		this.getData(this.props.url);
	}

	render() {
		return(
			<div className="data-card">
				<h1>{this.props.title}</h1>
				{
					
					<DonorList donors={this.state.donors} />
				}
			</div>
		)
	}
}

export default DataCard;