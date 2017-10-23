import React, { Component } from 'react';
import _ from 'lodash';

const style = {
	largeIcon: {
		fontSize: '5em'
	}
};

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
							<i class="material-icons prefix indigo-text">show_chart</i>
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
							<i class="material-icons prefix indigo-text">contact_mail</i>
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
							<i class="material-icons prefix indigo-text">playlist_add</i>
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
							<i class="material-icons prefix indigo-text">attach_money</i>
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
				<div className="divider" style={{ margin: '3em' }} />

				<h4>
					You could be kicking back with{' '}
					{this.state.futureVisitors.toLocaleString()} visitors,{' '}
					{this.state.futureLeads.toLocaleString()} leads, and{' '}
					{this.state.futureCustomers.toLocaleString()} new customers each
					month.
				</h4>
				<h4>
					That's worth about ${this.state.futureAnnualSales.toLocaleString()} in
					sales over the next 12 months!
				</h4>

				<div className="divider" style={{ margin: '3em' }} />

				<div className="row">
					<div className="col s12 m4">
						<div className="center">
							<i className="material-icons indigo-text" style={style.largeIcon}>
								show_chart
							</i>
							<h5>
								Attract {this.state.futureVisitors.toLocaleString()} Visitors
							</h5>
							<p className="light center">
								Wow! Isn't that amazing? Shoot us a message to find out how
								we'll accelerate your growth into the stratosphere.
							</p>
						</div>
					</div>
					<div className="col s12 m4">
						<div className="center">
							<i className="material-icons indigo-text" style={style.largeIcon}>
								contact_mail
							</i>
							<h5>
								Convert {this.state.futureLeads.toLocaleString()} New Leads
							</h5>
							<p className="light center">
								Wow! Isn't that amazing? Shoot us a message to find out how
								we'll accelerate your growth into the stratosphere.
							</p>
						</div>
					</div>
					<div className="col s12 m4">
						<div className="center">
							<i className="material-icons indigo-text" style={style.largeIcon}>
								{' '}playlist_add
							</i>
							<h5>
								Win Over {this.state.futureCustomers.toLocaleString()} New
								Customers
							</h5>
							<p className="light center">
								Wow! Isn't that amazing? Shoot us a message to find out how
								we'll accelerate your growth into the stratosphere.
							</p>
						</div>
					</div>
				</div>

				{/*  end JSX tag */}
			</div>
		);
	}
}

export default InputForm;
