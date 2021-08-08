import PropTypes from 'prop-types' // a way to catch errors.


const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// use of propTypes to catch errors.
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
