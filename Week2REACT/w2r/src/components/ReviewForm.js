import React from "react";
import $ from 'jquery';
import ReviewList from "./ReviewsList";

export default class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            MId : props.MId,
            Reviews : props.Reviews,
            name : '',
            Stars : '',
            Review : '',
        }
        
    }

    


    render() {
        return(
            <div>
                <form onSubmit={this.props.Action}>
                    <input type='text' id={`NI-${this.state.MId}`} placeholder='Name'/>
                    <p>Rating (0.5-5.0)</p>
                    <input type='range' id={`RI-${this.state.MId}`} min="0.5" max="5.0" step='0.5'/>
                    <input type='text' id={`ReI-${this.state.MId}`} placeholder='Review...'/>
                    <input type='submit' id={`RB-${this.state.MId}`} />
                </form>
            </div>
        )
    }
}

