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
                this.setState({ results: res.data.results });
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