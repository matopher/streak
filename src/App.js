import React, { Component } from 'react';
import './App.css';
import InputForm from './InputForm';

const titleStyle = {
	textAlign: 'center'
};

class App extends Component {
	render() {
		return (
			<div>
				<h3 style={titleStyle}>
					What could your traffic look like in 12 months?
				</h3>
				<InputForm />
			</div>
		);
	}
}

export default App;
