import React, {Component} from "react";


export default class Item extends Component{
    constructor(props){
        super(props)
        this.state = {
            Item : props.Item
        };
        this.handleClickP = this.handleClickP.bind(this);
        this.handleClickM = this.handleClickM.bind(this);
        this.handleClickD = this.handleClickD.bind(this);
    }

    handleClickP(e){
        e.preventDefault();
        //this.setState({...this.state, Item: {...this.state.Item, amount: (this.state.Item.amount+1)}});
        this.props.changeAmount(this.state.Item.key, {...this.state.Item, amount: (this.state.Item.amount+1)});
        console.log(this.state.Item);
    }

    handleClickM(e){
        e.preventDefault();
        //this.setState({...this.state, Item: {...this.state.Item, amount: (this.state.Item.amount-1)}});
        this.props.changeAmount(this.state.Item.key, {...this.state.Item, amount: (this.state.Item.amount-1)});
        console.log(this.state.Item);
    }

    handleClickD(e){
        e.preventDefault();
        this.props.removeItem(this.state.Item.key);
    }

    render(){
        console.log(this.state)
        return(
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm">
                            <h5 className="card-title">{this.state.Item.name}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"><button onClick={this.handleClickM}>-</button></div>
                        <div className="col">
                            <p className="card-text">{this.state.Item.amount}</p>
                            <button onClick={this.handleClickD}>Remove From Listing</button>
                        </div>
                        <div className="col"><button onClick={this.handleClickP}>+</button></div>
                    </div>
                </div>
            </div>
        );
    }
}