import React from 'react'
import 'font-awesome/css/font-awesome.css'
import './SearchBar.css'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {

    constructor() {
        super()

        this.state = {
            search: ''
        }
    }

    handleSearchChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.updateSearchTerm(this.state.search)
    }

    render() { // called by React whenever data changes
        return (
            <div className="searchbar-container">
                <form className="search-form">
                    <input
                        type="search"
                        name="search"
                        value={this.state.search} // set value to whatever the user enters into the serach bar
                        className="search-input"
                        placeholder="Search restaurants"
                        onChange={this.handleSearchChange} // call assigned function whenever value changes with event object argument
                    >
                    </input>
                    <button
                        type="submit"
                        className="search-button"
                        onClick={this.handleSubmit}
                    >
                        <i className="search-icon fa fa-search"/>
                    </button>
                </form>
            </div>
        )
    }
}

PropTypes.PropTypes = {
    updateSearchTerm: PropTypes.func.isRequired
}

export default SearchBar
