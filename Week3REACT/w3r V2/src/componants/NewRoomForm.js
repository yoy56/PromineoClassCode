import React, { useState } from "react";
import { ItemAPI } from "../rest/api";
import { Item } from "./Item";

export const NewRoomForm = (props) => {
    
    const [area, SetArea] = useState(undefined);

    const handleAreaInput = (val) => {
        const int = parseInt(val, 10);
        console.log(int)
        SetArea(int);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (area) {
            console.log(area)
            props.FetchNewItems(area);
        }else{
            props.FetchNewItems(4);
        }
        
    }

    // const fetchItems = async () => {
    //     const Items = await ItemAPI.get('images/search?limit=4');
    //     console.log(Items);
    //     // this.setState({Items});
    //     return Items
    // }

    

    const getnewimgs = (Items) => {
        console.log(Items);
        return(
            <div>
                {Items.map((e) => (
                    <div>
                        <Item
                        item={e}
                        fav={false}
                        FavItem={props.FavItem}
                        // updateItem={this.updateItem}
                        /> 
                    </div>
                ))}
            </div>
        )
    }
    // const Items = fetchItems();
    console.log(props)
    return(
        <div>
            <h4>Load Images</h4>
            <form onSubmit={onSubmit}>
                <input 
                type='number'
                placeholder='Number of Images'
                onChange={(e) => handleAreaInput(e.target.value)}
                value={area}
                />
                <button type='submit'>Load Images</button>
            </form>
            <br/>
            {getnewimgs(props.NewItems)}
        </div>
    )
}