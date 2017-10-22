import React, { Component } from 'react';
import _ from 'lodash';

class InputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: 100,
			newValue: 1
		};
	}
	onInputChange(e) {
		this.setState({ inputValue: e.target.value });
	}

	onClick(e) {
		let calc = _.floor(this.state.inputValue * 3.5);
		this.setState({ newValue: calc });
	}

	render() {
		return (
			<div className="row">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<input id="email" type="email" className="validate" />
							<label for="email">Email</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input
								id="site-visitors"
								type="number"
								value={this.state.inputValue}
								onChange={this.onInputChange.bind(this)}
							/>
							<label>How many site visitors?</label>
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
					You could kicking back with {this.state.newValue} visitors soon!
				</p>
			</div>
		);
	}
}

export default InputForm;
