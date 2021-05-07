import React, { Component } from "react";
import API from "../utils/API";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";

class EmployeeContainer extends Component {
    state = {
        results: [],
        search: "",
        toggle: 1
    };

    // When this component mounts, search for employees
    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.search()
            .then(res => {
                this.setState({ results: res.data.results });
            })
            .catch(err => console.log(err));
    };

    searchEmployeeResults = (query) => {
        console.log("Query String: ", query);
        console.log("Results: ", this.state.results);

        const searchResultsArray = this.state.results.filter(employee => (
            ((employee.name.first.includes(query)) ||
                (employee.name.last.includes(query)))
        ));
        this.setState({ results: searchResultsArray });
    };

    handleInputChange = event => {
        const value = event.target.value;

        console.log("Value: ", value);

        const searchResultsArray = this.state.results.filter(employee => (
            ((employee.name.first.includes(value)) ||
                (employee.name.last.includes(value)))
        ));

        this.setState({
            search: value,
            results: searchResultsArray
        });
    };

    handleSort = event => {
        
        if (this.state.toggle === 1) {
            this.setState({
                results: this.state.results.sort((a, b) =>
                    (a.name.first > b.name.first) 
                    ? 1 
                    : (a.name.first === b.name.first)
                    ?
                    ((a.name.last > b.name.last) 
                    ? 1 
                    : -1) 
                    : -1),

                toggle: -1    
            });
        } else {
            this.setState({
                results: this.state.results.sort((a, b) =>
                    (a.name.first < b.name.first) 
                    ? 1 
                    : (a.name.first === b.name.first)
                    ?
                    ((a.name.last < b.name.last) 
                    ? 1 
                    : -1) 
                    : -1),

                toggle: 1    
            });
        }
    };

    // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployeeResults(this.state.search);
    };

    render() {
        return (
            <>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <ResultList 
                    results={this.state.results}
                    handleSort={this.handleSort}
                />
            </>
        )
    }
}

export default EmployeeContainer;