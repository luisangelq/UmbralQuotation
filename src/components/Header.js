import PropTypes from "prop-types"

const Header = ({title}) => {
    return(
        <header className="ContentHeader">
            <h1 className="textHeader">{title}</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header;