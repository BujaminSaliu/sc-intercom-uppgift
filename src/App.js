import React, { Component } from 'react'
import Modal from './Modal.js'

//Change to correct url
const SWIFTURL = 'http://www..se'

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
	constructor(props) {
		super(props)
		this.state = { show: false }

		this.toggleModal = this.toggleModal.bind(this)
		this.startChat = this.startChat.bind(this)
	}

	componentWillMount() {
		if (typeof document !== 'undefined') {
			const Intercom = require('./chat.js')
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
					<h1>Intercom Testing</h1>
				</header>
				<p>Simple react app</p>
				<button style={buttonStyle} onClick={this.toggleModal}>
					Support
				</button>
				<Modal onClose={this.toggleModal} show={this.state.show}>
					<ol>
						<li style={listStyle}>
							<a href={SWIFTURL} target="_blank" style={linkStyle}>
								Redigera kontakt
							</a>
						</li>
						<li style={listStyle}>
							<a href={SWIFTURL} target="_blank" style={linkStyle}>
								Dela kontakt
							</a>
						</li>
						<li style={listStyle}>
							<a href={SWIFTURL} target="_blank" style={linkStyle}>
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
