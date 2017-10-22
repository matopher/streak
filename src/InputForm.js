import React, { Component } from 'react';

class InputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: 0
		};
	}
	update(e) {
		this.setState({ inputValue: e.target.value });
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
								onChange={this.update.bind(this)}
							/>
							<label>How many site visitors?</label>
						</div>
					</div>
				</form>
				<p>
					You could kicking back with {this.state.inputValue} visitors soon!
				</p>
			</div>
		);
	}
}

export default InputForm;
