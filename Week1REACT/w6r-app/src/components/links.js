import React from "react";

export default class link extends React.Component {
    render() {
        if (this.props.type == 0) {
            return(
                <a href={this.props.link} className='nav-link active'>{this.props.text}</a>
                
            )
        } else if (this.props.type == 1) {
            return(
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href={this.props.link} role="button" aria-expanded="false">{this.props.text}</a>
                    <ul className="dropdown-menu">
                        {this.props.children}
                    </ul>
                </li>
            )
        }
    };

    Createlist(props) {
        return (<li><a className="dropdown-item" href={this.props.links[props.i]}>{this.props.texts[props.i]}</a></li>)
    }
};