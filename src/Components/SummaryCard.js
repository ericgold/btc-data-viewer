import React from 'react';


class SummaryCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
		this.getData = this.getData.bind(this);
	}

	// fetch method to get data
	getData(url) {
		return fetch(url, {})
								 .then(response => response.json())
								 .then(jsonData => this.setState({ 
								 		in: jsonData[0].in ,
								 		out: jsonData[0].out,
								 		from_within: jsonData[0].from_within,
								 		to_within: jsonData[0].to_within,
								 		from_outside: jsonData[0].from_outside,
								 		to_outside: jsonData[0].to_outside,
								 		total_grass_roots: jsonData[0].total_grass_roots,
								 		total_from_in_state: jsonData[0].total_from_in_state
								 	}))
								 .catch(error => console.log(error));
	}

	componentDidMount() { 
		this.getData(this.props.url);
	}

	render() {
		return(
			<div className="summary-card">
				<h1>Summary</h1>
				<div>In: {this.state.in}</div>
				<div>Out: {this.state.out}</div>
				<div>From Within: {this.state.from_within}</div>
				<div>To Within: {this.state.to_within}</div>
				<div>From Outside: {this.state.from_outside}</div>
				<div>To Outside: {this.state.to_outside}</div>
				<div>Total Grass Roots: {this.state.total_grass_roots}</div>
				<div>Total From In State: {this.state.total_from_in_state}</div>
			</div>
		)
	}
}

export default SummaryCard;