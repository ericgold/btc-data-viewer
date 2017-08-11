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
		const { out, from_within, to_within, from_outside, to_outside, total_grass_roots, total_from_in_state } = this.state;
		return(
			<div className="summary-card">
				<h1>Summary</h1>
				<div>In: {this.state.in}</div>
				<div>Out: {out}</div>
				<div>From Within: {from_within}</div>
				<div>To Within: {to_within}</div>
				<div>From Outside: {from_outside}</div>
				<div>To Outside: {to_outside}</div>
				<div>Total Grass Roots: {total_grass_roots}</div>
				<div>Total From In State: {total_from_in_state}</div>
			</div>
		)
	}
}

export default SummaryCard;