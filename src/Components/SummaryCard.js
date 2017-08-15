import React from 'react';
import SummaryItem from './SummaryItem';
import formatDollars from '../helpers';
import '../summary-card.css';

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
								 		in: formatDollars(jsonData[0].in),
								 		out: formatDollars(jsonData[0].out),
								 		from_within: formatDollars(jsonData[0].from_within),
								 		to_within: formatDollars(jsonData[0].to_within),
								 		from_outside: formatDollars(jsonData[0].from_outside),
								 		to_outside: formatDollars(jsonData[0].to_outside),
								 		total_grass_roots: formatDollars(jsonData[0].total_grass_roots),
								 		total_from_in_state: formatDollars(jsonData[0].total_from_in_state)
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
				<div>
					<SummaryItem title={"In:"} amount={this.state.in} />
					<SummaryItem title={"Out:"} amount={out} />
					<SummaryItem title={"From Within:"} amount={from_within} />
					<SummaryItem title={"To Within:"} amount={to_within} /> 
					<SummaryItem title={"From Outside:"} amount={from_outside} /> 
					<SummaryItem title={"To Outside:"} amount={to_outside} /> 
					<SummaryItem title={"Total Grass Roots:"} amount={total_grass_roots} /> 
					<SummaryItem title={"Total From In State:"} amount={total_from_in_state} /> 
				</div>
			</div>
		)
	}
}

export default SummaryCard;