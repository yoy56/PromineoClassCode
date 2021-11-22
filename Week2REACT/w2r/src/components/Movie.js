import React from "react";

export default class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Img : props.Img,
            Title : props.Title,
            Desc : props.Desc || "No Description...",
            Id : props.Id
        };
    }

    render(){

        return(
            <div className='container border border-solid border-primary'>
                <img src={this.Img} alt={`Cover for the Movie ${this.Title}`} />
            </div>
        );
    }
}