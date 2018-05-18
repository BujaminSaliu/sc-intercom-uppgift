import React, { Component } from 'react'
import PropTypes from 'prop-types'

const backDropStyle = {
	position: 'fixed',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	backgroundColor: 'rgba(0,0,0,0.3)',
	padding: 50
}

const modalStyle = {
	backgroundColor: '#fff',
	borderRadius: 5,
	maxWidth: 200,
	minHeight: 300,
	margin: '0 auto',
	padding: 30,
	position: 'relative'
}

const footerStyle = {
	position: 'absolute',
	bottom: 30
}

class Modal extends Component {
	onClose = e => {
		console.log('Close button clicked')
		e.stopPropagation()
		this.props.onClose && this.props.onClose(e)
	}

	onKeyUp = e => {
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
			<div style={backDropStyle}>
				<div style={modalStyle}>
					{this.props.children}
					<div style={footerStyle}>
						<button
							onClick={e => {
								this.onClose(e)
							}}
						>
							Close
						</button>
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
