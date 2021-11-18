import React from "react";
import Link from "./links";

export default class navbar extends React.Component{
    render() {
        return(
            <div className='bg-black text-white'>
                <ul className="nav">
                    <Link text='Test 1' link='#' type={0}/>
                    <Link text='Test 2' link='#' type={0}/>
                    <Link text='Test 3' link='#' type={0}/>
                    <Link text='Test 4' link='#' type={1}>
                        <li><a className="dropdown-item" href='#'>SubTest5</a></li>
                        <li><a className="dropdown-item" href='#'>SubTest6</a></li>
                        <li><a className="dropdown-item" href='#'>SubTest7</a></li>
                    </Link>
                </ul>
            </div>
        )
    }
}