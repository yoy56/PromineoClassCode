import React, {Component} from "react";


export default class Item extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : props.name,
            amount : props.amount,
            index : props.index
        };
        this.handleClickP = this.handleClickP.bind(this);
        this.handleClickM = this.handleClickM.bind(this);
        this.handleClickD = this.handleClickD.bind(this);
    }

    handleClickP(e){
        e.preventDefault();
        this.setState({...this.state, amount: (this.state.amount+1)});
        this.props.changeAmount(this.state.index, this.state.amount+1);
    }

    handleClickM(e){
        e.preventDefault();
        this.setState({...this.state, amount: (this.state.amount-1)});
        this.props.changeAmount(this.state.index, this.state.amount-1);
    }

    handleClickD(e){
        e.preventDefault();
        this.props.removeItem(this.state.index);
    }

    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm">
                            <h5 className="card-title">{this.state.name}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"><button onClick={this.handleClickM}>-</button></div>
                        <div className="col">
                            <p className="card-text">{this.state.amount}</p>
                            <button onClick={this.handleClickD}>Remove From Listing</button>
                        </div>
                        <div className="col"><button onClick={this.handleClickP}>+</button></div>
                    </div>
                </div>
            </div>
        );
    }
}