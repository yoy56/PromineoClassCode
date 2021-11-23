import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        };
    }

    render() {
        return(
            <div>
                <Movie Id='0' Title='Test Movie' />
            </div>
        )
    }
}