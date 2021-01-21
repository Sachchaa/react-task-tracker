import PropTypes from 'prop-types'
import Button from './button'

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                color={showAdd ? 'red' : 'grey'}
                onClick={onAdd}
                text={showAdd ? 'Close' : 'Add'}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
