import React, {Component} from "react";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";
import { call } from "./internet";

var templist = [{name : 'Bananna', amount : 1, type : 'Produce', key:0},
{name : 'Milk Carton', amount : 1, type : 'Dairy', key:1},
{name : 'Cheese', amount : 5, type : 'Dairy', key:2},
{name : 'Delete Test', amount : 0, type : 'Test', key:3}];

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            Itemlist : []

        }
        this.removeItem = this.removeItem.bind(this);
        this.changeAmount = this.changeAmount.bind(this);
        this.addItem = this.addItem.bind(this);
        this.filteritems = this.filteritems.bind(this);
    }


    componentDidMount(){
        console.log('mount');
        const list = call.get();
        //this.setState({Itemlist: list});
    }


    changeAmount(index,val){
        let artemp = call.set(index,'amount',val);
        //this.setState({Itemlist : artemp});
    }


    removeItem(id){
        let itlis = call.remove(id);
        //this.setState({Itemlist : itlis});
        //console.log(this.state);
    }

    addItem(name,amount,type){
        let itlis = call.add({name : name, amount : amount, type : type, key: this.state.Itemlist.length})
        //this.setState({itlis});
    }

    sortItems(props){
        console.log(props.Itemlist);
        let types = []
        props.Itemlist.map((e) => {
            console.log('TypeSort:')
            console.log(e);
            if (types.includes(e.type)) {
                
            } else {
                types.push(e.type);
            }

            return(null)
        })
        console.log('Types:')
        console.log(types);

        return(
            <div className="Items">
                {types.map((ele,index) => (
                    <div className={`${ele}`} key={index.toString()}>
                        {console.log(props.Itemlist.filter((e) => (e.type === ele)))}
                        <ItemList Title={ele} Items={props.Itemlist.filter((e) => (e.type === ele))} removeItem={props.removeItem} changeAmount={props.changeAmount}/>
                    </div>
                ))}
            </div>
        )
            
    }

    filteritems(array,type){
        let filarry = array.filter((e) => (e.type === type));
        console.log(filarry);
        return(filarry);
    }


    render(){
        console.log('Main State:');
        console.log(this.state);
        return(
            <div className="Main">
                <this.sortItems Itemlist={this.state.Itemlist} removeItem={this.removeItem} changeAmount={this.changeAmount}/>
                {/* <ItemList Title={'test'} Items={this.state.Itemlist} removeItem={this.removeItem} changeAmount={this.changeAmount}/> */}
                <ItemForm addItem={this.addItem}/>
            </div>
        )
    }
}