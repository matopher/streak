import React, { Component } from 'react';

class InputForm extends Component {
	render() {
		return (
			<div className="row">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s6">
							<input
								placeholder="Placeholder"
								id="first_name"
								type="text"
								className="validate"
							/>
							<label for="first_name">First Name</label>
						</div>
						<div className="input-field col s6">
							<input id="last_name" type="text" className="validate" />
							<label for="last_name">Last Name</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="email" type="email" className="validate" />
							<label for="email">Email</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="site-visitors" type="number" />
							<label>How many site visitors?</label>
						</div>
					</div>
					<a className="waves-effect waves-light btn">Submit</a>
				</form>
			</div>
		);
	}
}

export default InputForm;
