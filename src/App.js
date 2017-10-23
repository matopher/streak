import React, { Component } from 'react';
import './App.css';
import InputForm from './InputForm';

class App extends Component {
	render() {
		return (
			<div>
				<h3 className="indigo-text darken-4" style={{ textAlign: 'center' }}>
					🤔 <br /> What could your traffic look like in 12 months?
				</h3>
				<InputForm />
			</div>
		);
	}
}

export default App;
