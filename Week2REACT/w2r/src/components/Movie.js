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
                <div className='row my-2 overflow-hidden' style={{height : '275px'}}>
                    <div className='col'>
                        <img src={this.props.Img ?? "./Imgs/PNF.png"} 
                        alt={`Cover for the Movie: "${this.props.Title}"`} className='text-left overflow-hidden' 
                        height='275px' width='183px'/>
                    </div>
                    <div className='col-sm overflow-auto'>
                        <h2 className='align-middle'>{this.props.Title}</h2>
                        <Stars Amount={this.props.StarRate}/>
                        <p className=''>{this.props.Desc ?? "No Description..."}</p>
                    </div>
                </div>
            </div>
        );
    }
}