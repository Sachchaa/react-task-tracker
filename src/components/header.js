import PropTypes from 'prop-types'
import Button from './button'

const Header = ({ title }) => {

    const btnClick = () => {
        console.log('click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Add' color='grey' onClick={btnClick} />
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
