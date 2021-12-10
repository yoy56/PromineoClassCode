import React, {Component} from 'react';
import Item from './Item';

const templist = [{name : 'Bananna', amount : 1, key:0},
{name : 'Milk Carton', amount : 1, key:1},
{name : 'Delete Test', amount : 0, key:2}];

export default class ItemList extends Component {
    constructor(props){
        super(props);
        this.state = {
            Items : templist //this.props.items
        };
        this.removeItem = this.removeItem.bind(this);
        this.changeAmount = this.changeAmount.bind(this);
        
        
    }

    changeAmount(index,val){
        let artemp = [...this.state.Items];
        artemp[index] = {...artemp[index], amount: val};
        this.setState({Items : artemp});
    }


    removeItem(index){
        let artemp = [...this.state.Items];
        artemp.splice(index, 1);
        this.setState({Items : artemp});
    }


    render(){
        return(
            <div className='container'>
                {this.state.Items.map((e,index) => (
                    <div className=''>
                        <Item name={e.name} amount={e.amount} key={`${e.name}-${index}`} index={index} removeItem={this.removeItem} changeAmount={this.changeAmount}/>
                    </div>
                ))}
            </div>
        );
    };
}