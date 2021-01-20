import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
    return (
        <button
            className='btn'
            onClick={onClick}
            style={{ backgroundColor: color }}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'white'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
