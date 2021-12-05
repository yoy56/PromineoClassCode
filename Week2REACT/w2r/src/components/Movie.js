import React from "react";
import Stars from "./Stars";
import $ from 'jquery';
import ReviewList from "./ReviewsList";
import { Reviewslist } from "./ReviewsList";

export default class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Img : props.Img,
            Title : props.Title,
            Desc : props.Desc,
            Id : props.Id
        };
        this.calcStar = this.calcStar.bind(this)
    }

    calcStar(Id) {
        console.log("calc")
        let Staramount = 0;
        console.log(Reviewslist[Id]);
        Reviewslist[Id].map((e) => 
            {Staramount += parseInt(e.Amount);
            console.log(Staramount);}
        );
        console.log(Staramount);
        Staramount = Staramount / (Reviewslist[Id]).length;
        console.log(Staramount);
        //this.state.StarRate = Staramount;
        this.setState({
            Img : this.props.Img,
            Title : this.props.Title,
            Desc : this.props.Desc,
            Id : this.props.Id,
            StarRate : Staramount
        })
        console.log(this.state);
    }

    componentDidMount(){
        this.calcStar(this.state.Id)
    }

    render(){
        //console.log(this.calcStar(this.state.Id));
        //let Staramount = this.calcStar(this.state.Id);
        return(
            <div className='container border border-solid border-primary overflow-hidden h-50'>
                <div className='row my-2 ' >
                    <div className='col'>
                        <img src={this.props.Img} 
                        alt={`Cover for the Movie: "${this.props.Title}"`} className='text-left' 
                        height='275px' width='183px'/>
                    </div>
                    <div className='col-sm'>
                        <h2 className='align-middle'>{this.props.Title}</h2>
                        <div className='py-2'>
                            <Stars Amount={this.state.StarRate}/>
                        </div>
                        <div className='mt-1 border border-solid border-secondary container overflow-auto' style={{height : '100px'}}>
                            <p className=''>{this.props.Desc ?? "No Description..."}</p>        
                        </div>
                        <div className='mt-1 border border-solid border-secondary container overflow-auto' style={{height : '100px'}}>
                                  <ReviewList MId={this.props.Id} Staramount={this.state.StarRate} calcStar={this.calcStar}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}