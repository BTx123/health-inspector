import React from 'react'

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
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar
