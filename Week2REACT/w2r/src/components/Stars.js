import React from "react";

export default class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Amount : props.Amount
        };
    }

    render() {
        let staramount = (this.props.Amount / 5) * 100
        return(
        <div className='position-relative'>
            <span className='position-absolute'style={{bottom : '0px'}}>
                <img src='./Imgs/Star.png' className='postion-top' style={{width : '20px'}}></img>
            </span>
            <span className='position-absolute' style={{bottom : '0px'}}>
                <img src='./Imgs/Star.png' className='postion-top' style={{width : '20px',marginLeft : '20px'}}></img>
            </span>
            <span className='position-absolute'style={{bottom : '0px'}}>
                <img src='./Imgs/Star.png' className='postion-top' style={{width : '20px',marginLeft : '40px'}}></img>
            </span>
            <span className='position-absolute'style={{bottom : '0px'}}>
                <img src='./Imgs/Star.png' className='postion-top' style={{width : '20px',marginLeft : '60px'}}></img>
            </span>
            <span className='position-absolute'style={{bottom : '0px'}}>
                <img src='./Imgs/Star.png' className='postion-top' style={{width : '20px',marginLeft : '80px'}}></img>
            </span>
            
            <div className='progress' style={{width : '100px'}}>
                <div className='progress-bar' style={{width : `${staramount}%`}} aria-valuenow={this.props.Amount} aria-valuemin='0' aria-valuemax='5'/>
            </div>
        </div>
        )
    }
}