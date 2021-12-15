import React, {Component} from "react";

export default class ItemForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            sAmount : 0,
            type : '',

        }
        this.handleClick = this.handleClick.bind(this);
        this.handlechange = this.handlechange.bind(this);
    }

    handlechange(e){
        this.setState({[e.target.name] : e.target.value});
        console.log(this.state);
    }

    handleClick(e){
        e.preventDefault();
        this.props.addItem(this.state.name,parseInt(this.state.sAmount),this.state.type);
    }


    render(){


        return(

            <div>
                <form>
                    <input type='text' name="name" placeholder="Name of Item" onChange={this.handlechange} />
                    <input type='number' name="sAmount" placeholder="Amount" onChange={this.handlechange} />
                    <input type='text' name="type" placeholder="Item's Aisle" onChange={this.handlechange} />
                    <input type='submit' onClick={this.handleClick}/>
                </form>
            </div>
        )
    }
}