import React from "react";
import Stars from "./Stars";

export default class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Name : props.Name,
            ReVw : props.ReVw,
            Amount : props.Amount
        }
    };

    

    render(){
        return(
            <div className='container border border-solid border-primary'>
                <div className='row'>
                    <div className='col'>
                        <p>{this.state.Name}</p>
                    </div>
                    <div className='col py-3'>
                        <Stars Amount={this.state.Amount}/>
                    </div>
                </div>
                <p>{this.state.ReVw}</p>
            </div>
        )
    }
}