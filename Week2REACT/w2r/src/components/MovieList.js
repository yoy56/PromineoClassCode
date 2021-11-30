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
                <Movie Id='0' Title='Test Movie' StarRate={4}/>
                <Movie Id='1' Title='Test Movie 2' StarRate={2.5} Desc='The Sequal to "Test Movie".'/>
            </div>
        )
    }
}