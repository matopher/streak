import React, { Component } from 'react';
import _ from 'lodash';

class InputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monthlyVisitors: 2000,
			monthlyLeads: 15,
			monthlyCustomers: 3,
			monthlySales: 1500,
			futureVisitors: 0,
			futureLeads: 0,
			futureCustomers: 0,
			futureSales: 0,
			futureAnnualSales: 0
		};
	}

	onClick(e) {
		let futureVisitors = _.floor(this.state.monthlyVisitors * 3.3);
		this.setState({ futureVisitors });
		let futureLeads = _.floor(this.state.monthlyLeads * 3.5);
		this.setState({ futureLeads });
		let closeRate = this.state.monthlyCustomers / this.state.monthlyLeads;
		let futureCustomers = _.floor(futureLeads * closeRate);
		this.setState({ futureCustomers });
		let futureSales = _.floor(this.state.monthlySales * futureCustomers);
		this.setState({ futureSales });
		let futureAnnualSales = futureSales * 12;
		this.setState({ futureAnnualSales });
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
								id="monthly-customers"
								type="number"
								value={this.state.monthlyCustomers}
								onChange={e =>
									this.setState({ monthlyCustomers: e.target.value })}
							/>
							<label>How many new customers do you receive a month?</label>
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
					You could kicking back with{' '}
					{this.state.futureVisitors.toLocaleString()} visitors,{' '}
					{this.state.futureLeads.toLocaleString()} leads, and{' '}
					{this.state.futureCustomers.toLocaleString()} new customers each
					month!
				</p>
				<p>
					That's worth about ${this.state.futureAnnualSales.toLocaleString()} in
					sales over the next 12 months!
				</p>
			</div>
		);
	}
}

export default InputForm;
