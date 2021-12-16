import React from "react";
import { NewRoomForm } from './NewRoomForm'

export const Item = (props) => {
    const {item, updateitem} = props;

    // const deleteroom = (roomId) => {
    //     const updatedItem = {
    //         ...item,
    //         breeds: item.breeds.filter((x) => x._id !== roomId)
    //     };
    //     updateitem(updatedItem);
    // }

    const addNewRoom = (room) => updateitem({ ...item, rooms: {...item.rooms, room}})

    const breeds = () => (
        <ul>
            {item.breeds.map((breed, index) => (
                <li key={index}>
                    <label>{`${breed.name} Origin: ${breed.origin}`}</label>
                    <p>{breed.description}</p>
                    {/* <button onClick={(e) => deleteroom(room._id)}>Delete</button> */}
                </li>
            ))}
        </ul>
    );
    console.log(item);
            return(
                    <div>
                        <h1>{item.id}</h1>
                        <img src={item.url} className={`${props.ItemType} w-25`} onClick={(e) => props.ClickEvent(props.id)}/>
                        {/* {breeds()} */}
                    </div>
                  )
    

};