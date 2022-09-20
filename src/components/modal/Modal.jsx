import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

const Modal = props => {
	const [active, setActive] = useState(false)

	useEffect(() => {
		setActive(props.active)
	}, [props.active])
	
	return (
		<div
			id={props.id}
			className={`modal ${active ? 'active' : ''}`}
		>
			{props.children}
		</div>
	)
}

export const ModalContent = props => {
	const contentRef = useRef(null)

	const closeModal = () => {
		contentRef.current.parentNode.classList.remove('active')
		if (props.onClose) props.onClose()
	}
	return (
		<div className='modal__content' ref={contentRef}>
			{props.children}
			<div 
				className='modal__content-close' 
				onClick={closeModal}
			>
				<i
					className='bx bx-x'
				>
					
				</i>
			</div>
		</div>
	)
}

Modal.propTypes = {
	active: PropTypes.bool,
	id: PropTypes.string
}

ModalContent.propTypes = {
	onClose: PropTypes.func
}

export default Modal