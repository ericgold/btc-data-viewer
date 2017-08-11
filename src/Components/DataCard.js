import React from 'react';
import PropTypes from 'prop-types';
import DonorList from './DonorList';

class DataCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			donors: []
		};
		this.getData = this.getData.bind(this);
		this.updateCount = this.updateCount.bind(this);
	}
	// fetch method to get data
	getData(url) {
		return fetch(url, {})
								 .then(response => response.json())
								 .then(jsonData => this.setState({ donors: jsonData }))
								 .catch(error => console.log(error));
	}

	updateCount(event) {
		this.setState({
			count: event.target.value
		})
	}

	componentDidUpdate() {
		const url = `${this.props.url}${this.state.count}/`;
		this.getData(url);
	}
	
	componentDidMount() { 
		const url = `${this.props.url}${this.state.count}/`;
		this.getData(url);
	}

	render() {
		return(
			<div className="data-card">
				<h1>{this.props.title}</h1>
				<input 
					type="number" 
					placeholder="enter 1-50"
					min="0"
					max="50"
					onChange={this.updateCount}/>
				<DonorList donors={this.state.donors} />
			</div>
		)
	}
}

DataCard.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string.isRequired
}

export default DataCard;