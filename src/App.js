import React, { Component } from 'react'
import Modal from './modal.js'
import Intercom from './intercom.js'

const SWIFTCOURTLOCATION = 'http://www.swiftcourt.se'

const buttonStyle = {
	borderRadius: '6px',
	backgroundColor: '#008CBA',
	padding: '10px 24px',
	cursor: 'pointer',
	color: 'white'
}

const listStyle = {
	listStyleType: 'none'
}

const linkStyle = {
	textDecoration: 'none'
}

class App extends Component {
	constructor() {
		super()
		this.state = { show: false }

		this.toggleModal = this.toggleModal.bind(this)
		this.startChat = this.startChat.bind(this)
	}

	componentWillMount() {
		if (typeof document !== 'undefined') {
			return
		}
	}

	toggleModal() {
		this.setState({
			...this.state,
			show: !this.state.show
		})
	}

	startChat(e) {
		window.Intercom('boot', {
			app_id: 'fyq3wodw'
		})
		this.toggleModal()
		e.preventDefault()
	}

	render() {
		return (
			<div>
				<header>
					<h1>Intercom</h1>
				</header>
				<h2>Simple react app</h2>
				<button style={buttonStyle} onClick={this.toggleModal}>
					Support
				</button>
				<Modal onClose={this.toggleModal} show={this.state.show}>
					<ol>
						<li style={listStyle}>
							<a href={SWIFTCOURTLOCATION} target="_blank" style={linkStyle}>
								Redigera kontakt
							</a>
						</li>
						<li style={listStyle}>
							<a href={SWIFTCOURTLOCATION} target="_blank" style={linkStyle}>
								Dela kontakt
							</a>
						</li>
						<li style={listStyle}>
							<a href={SWIFTCOURTLOCATION} target="_blank" style={linkStyle}>
								Signera kontakt
							</a>
						</li>
						<a href="" style={linkStyle} onClick={this.startChat}>
							Annat - gå till chatten
						</a>
					</ol>
				</Modal>
			</div>
		)
	}
}
export default App
