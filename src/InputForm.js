import React, { Component } from 'react';
import _ from 'lodash';

class InputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monthlyVisitors: 1000,
			monthlyLeads: 10,
			monthlySales: 100,
			futureVisitors: 0,
			futureLeads: 0,
			futureSales: 0,
			finalValue: 1
		};
	}

	onClick(e) {
		let futureVisitors = _.floor(this.state.monthlyVisitors * 3.5);
		this.setState({ futureVisitors });
		let futureLeads = _.floor(this.state.monthlyLeads * 3.5);
		this.setState({ futureLeads });
		let futureSales = _.floor(this.state.monthlySales * 3.5);
		this.setState({ futureSales });
		let calc =
			this.state.monthlyVisitors *
			this.state.monthlyLeads *
			this.state.monthlySales;
		this.setState({ finalValue: calc });
	}

	render() {
		return (
			<div className="row center-align">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<input
								id="site-visitors"
								type="number"
								value={this.state.monthlyVisitors}
								onChange={e =>
									this.setState({ monthlyVisitors: e.target.value })}
							/>
							<label>How many website visitors do you receive a month?</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input
								id="monthly-leads"
								type="number"
								value={this.state.monthlyLeads}
								onChange={e => this.setState({ monthlyLeads: e.target.value })}
							/>
							<label>How many leads do you receive a month?</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input
								id="monthly-sales"
								type="number"
								value={this.state.monthlySales}
								onChange={e => this.setState({ monthlySales: e.target.value })}
							/>
							<label>
								What is your average monthly sales price per customer?
							</label>
						</div>
					</div>
				</form>
				<button
					className="waves-effect waves-light btn"
					onClick={this.onClick.bind(this)}
				>
					Forecast
				</button>
				<p>
					You could kicking back with {this.state.futureVisitors} visitors,{' '}
					{this.state.futureLeads} leads, and {this.state.futureSales} in sales
					soon!
				</p>
				<p>
					That's worth about ${this.state.finalValue}!
				</p>
			</div>
		);
	}
}

export default InputForm;
