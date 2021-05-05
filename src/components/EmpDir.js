import React, { Component } from "react";
// import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
// import SearchForm from "./SearchForm";
// import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class EmployeeContainer extends Component {
    state = {
        result: {},
        search: ""
    };

    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
        // this.searchEmployees();
    }

    render() {
        return (
            <h1>Hi! I'm here.</h1>
        );
    }
}

export default EmployeeContainer;