import React, { Component } from "react";
// import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
// import SearchForm from "./SearchForm";
// import MovieDetail from "./MovieDetail";
import API from "../utils/API";
import ResultList from "./ResultList";

class EmployeeContainer extends Component {
    state = {
        results: [],
        search: ""
    };

    searchEmployees = () => {
        API.search()
            .then(res => {
                console.log("Res.data.results:", res.data.results);
                this.setState({ results: res.data.results });
                // console.log("API Search Results: ", res.data.results);
                // console.log("This.state.results: ", this.state.results);
            })
            .catch(err => console.log(err));
    };

    // When this component mounts, search for employees
    componentDidMount() {
        this.searchEmployees();
    }

    render() {

        if (this.state.results) {
            return (<ResultList results={this.state.results} />);
        } else {
            return "";
        }
    }
}

export default EmployeeContainer;