import React, {Component} from "react";
import {Item} from './Item';
import { ItemAPI } from "../rest/api";
import { NewRoomForm } from "./NewRoomForm";


const testlist = [{name: 'Test', rooms:[]}]

export class ItemList extends Component{
    state = {
        Items: [],
        NewItems: []
    };


    componentDidMount() {
        //ItemAPI.Defput(testlist);
        this.fetchItems();
    }

    fetchItems = async () => {
        const Items = await ItemAPI.get('favourites');
        console.log(Items);
        this.setState({...this.state, Items: Items});
        
    }

    fetchNewItems = async (limit) => {
        const Items = await ItemAPI.get(`images/search?limit=${limit}`);
        console.log(Items);
        this.setState({...this.state, NewItems: Items});
        
    }

    FavItem = async (itemID) => {
        await ItemAPI.post(itemID,'favourites');
        this.fetchItems();
    }


    updateItem = async (updatedItem) => {
        await ItemAPI.put(updatedItem);
        this.fetchItems();
    }

    render() {
        return(
            <div className="Item-list">
                {this.state.Items.map((item) => (
                    <div className={item.id} key={item.id}>
                        <Item
                        item={item}
                        fav={true}
                        /> 
                    </div>
                ))}
                <NewRoomForm NewItems={this.state.NewItems} FetchNewItems={this.fetchNewItems} FavItem={this.FavItem}/>
            </div>
        )
    }
}