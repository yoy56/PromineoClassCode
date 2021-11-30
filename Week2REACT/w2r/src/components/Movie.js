import React from "react";
import Stars from "./Stars";

export default class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Img : props.Img,
            Title : props.Title,
            Desc : props.Desc,
            Id : props.Id,
            StarRate : props.StarRate
        };
    }

    render(){

        return(
            <div className='container border border-solid border-primary'>
                <img src={this.props.Img ?? "./Imgs/PNF.png"} alt={`Cover for the Movie: "${this.props.Title}"`} />
                <h2>{this.props.Title}</h2>
                <Stars Amount={this.props.StarRate}/>
                <p>{this.props.Desc ?? "No Description..."}</p>
            </div>
        );
    }
}