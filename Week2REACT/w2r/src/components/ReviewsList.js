import React from "react";
import Review from "./Reviews";
import $ from 'jquery';
import ReviewForm from "./ReviewForm";


const Reviewslist = [
    [
        {Id : 0, Name : 'Reviwer 1', ReVw : 'Test Movie is the best movie.', Amount : '5'},{Id : 1, Name : 'Test Rev', ReVw : 'Pretty Good Movie, Liked all the testing in it.', Amount : '4.5'}
    ],
    [{Id : 0, Name : 'Reviwer 1', ReVw : 'Test Movie 2 much worse than the first one', Amount : '1'},{Id : 1, Name : 'Test Rev', ReVw : 'So Bad!!! Wasn\'t even any tesing in it.', Amount : '2.5'}],
    [{Id : 0, Name : 'Reviwer 1', ReVw : 'Test Movie is the best movie.', Amount : '5'}],
    [{Id : 0, Name : 'Reviwer 1', ReVw : 'Test Movie is the best movie.', Amount : '5'}],
    [{Id : 0, Name : 'Reviwer 1', ReVw : 'Test Movie is the best movie.', Amount : '5'}],
    [{Id : 0, Name : 'Reviwer 1', ReVw : 'Test Movie is the best movie.', Amount : '5'}],
    [{Id : 0, Name : 'Reviwer 1', ReVw : 'Test Movie is the best movie.', Amount : '5'}],
    [{Id : 0, Name : 'Reviwer 1', ReVw : 'Test Movie is the best movie.', Amount : '5'}],
    [{Id : 0, Name : 'Reviwer 1', ReVw : 'Test Movie is the best movie.', Amount : '5'}],
    [{Id : 0, Name : 'Reviwer 1', ReVw : 'Test Movie is the best movie.', Amount : '5'}],
    [{Id : 0, Name : 'Reviwer 1', ReVw : 'Test Movie is the best movie.', Amount : '5'}],
    [{Id : 0, Name : 'Reviwer 1', ReVw : 'Test Movie is the best movie.', Amount : '5'}],
    [{Id : 0, Name : 'Reviwer 1', ReVw : 'Test Movie is the best movie.', Amount : '5'}]
];

export default class ReviewList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            MId : props.MId,
            Reviews : Reviewslist,
            Staramount : props.Staramount
        }
        this.createReview = this.createReview.bind(this)
    }

    createReview(e){
        e.preventDefault();
        console.log('test');
        console.log(this.state.Reviews);
        let name = $(`#NI-${this.state.MId}`).val();
        let revw = $(`#ReI-${this.state.MId}`).val();
        let amount = $(`#RI-${this.state.MId}`).val();
        let temp = this.state.Reviews;
        temp[this.state.MId].push({Id : temp[this.state.MId].length, Name : name, ReVw : revw, Amount : amount});
        this.setState(temp);
        console.log(this.state.Reviews)
        console.log(Reviewslist)
        
        this.props.calcStar(this.state.MId);
    }

    ReviewListMake(props){
        const Revs = props.Revs;
        const RevList = Revs.map((e) => 
            <Review Name={e.Name} ReVw={e.ReVw} Amount={e.Amount} key={`${props.MId}-${e.Id}`}/>
        );
        return(RevList);
        
    }



    render(){
        return(
            <div>
                <this.ReviewListMake Revs={(this.state.Reviews[this.state.MId])} MId={this.state.MId}/>
                <ReviewForm MId={this.state.MId} Reviews={this.state.Reviews} Action={this.createReview}/>
            </div>
        )
    }
}

export { Reviewslist };