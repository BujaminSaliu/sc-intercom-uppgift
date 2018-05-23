import React, { Component } from 'react'
import PropTypes from 'prop-types'

const behindModalStyle = {
	position: 'fixed',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	backgroundColor: 'rgba(0,0,0,0.6)',
	padding: 50
}
const closeStyle = {
	color: 'black',
	fontSize: '28px',
	fontWeight: 'bold',
	cursor: 'pointer'
}

const modalStyle = {
	backgroundColor: '#fff',
	borderRadius: 10,
	border: '1px solid black',
	maxWidth: 'fit-content',
	minHeight: 'fit-content',
	margin: 'auto auto',
	paddingRight: 30,
	position: 'relative'
}

const footerStyle = {
	position: 'absolute',
	right: '15px',
	top: '5px',
	textDecoration: 'none',
	font: '14px'
}

class Modal extends Component {
	constructor(props) {
		super(props)
		this.state = {}

		this.onClose = this.onClose.bind(this)
		this.onKeyUp = this.onKeyUp.bind(this)
	}

	onClose(e) {
		e.stopPropagation()
		this.props.onClose && this.props.onClose(e)
	}

	onKeyUp(e) {
		//close dialog with ESC key 27
		if (e.which === 27 && this.props.show) {
			this.onClose(e)
		}
	}

	//add a listener on key up
	componentDidMount() {
		document.addEventListener('keyup', this.onKeyUp)
	}
	//remove the handler when the component is removed from the dom
	componentWillUnmount() {
		document.removeEventListener('keyup', this.onKeyUp)
	}

	render() {
		if (!this.props.show) {
			return null
		}
		return (
			<div style={behindModalStyle}>
				<div style={modalStyle}>
					{this.props.children}
					<div style={footerStyle}>
						<span style={closeStyle} onClick={this.onClose}>
							&times;
						</span>
					</div>
				</div>
			</div>
		)
	}
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired
}

export default Modal
