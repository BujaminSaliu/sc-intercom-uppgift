import React, { Component } from 'react'
import './App.css'
import wrapper from './intercom-wrapper'
import { Button } from 'react-bootstrap'
import Modal from './Modal.js'

class App extends Component {
	state = {
		show: false
	}
	showModal = () => {
		this.setState({
			...this.state,
			show: !this.state.show
		})
	}

	render() {
		return (
			<div className="App">
				<header>
					<h1>Intercom Testing</h1>
				</header>
				<p>Simple react app</p>

				<input type="button" onClick={this.showModal} value="Show modal" />
				<Modal onClose={this.showModal} show={this.state.show}>
					<a href=""> Redigera kontakt</a>
					<a href=""> Dela kontakt</a>
					<a href=""> Signera kontakt</a>
					<a href=""> Annat, ta mig till chatten</a>
				</Modal>
			</div>
		)
	}
}
export default App
