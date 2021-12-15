import React, {Component} from 'react';
import Item from './Item';



export default class ItemList extends Component {
    constructor(props){
        super(props);
        this.state = {
            Items : this.props.Items,
            Title : this.props.Title
        };
        //this.delete = this.delete.bind(this)
        
        
    }

    
    // delete(id){
    //     console.log('id:')
    //     console.log(id);
    //     let itlis = this.state.Items.filter((e) => (id !== e.key))
    //     console.log('itlis:')
    //     console.log(itlis);
    //     this.setState({Items: itlis, ...this.state.Items});
    //     console.log('state');
    //     console.log(this.state);
    // }


    render(){
        var tl = [...this.state.Items];
        console.log(tl);
        console.log(tl.length);
        console.log(this.state.Items.lenght)
        if (tl.length != 0) {
            console.log(`${this.state.Title} state:`)
            console.log(this.state.Items)
            return(
                <div className='container'>
                    <h3>{this.state.Title}</h3>
                    {this.state.Items.map((e,index) => (
                        <div className='' key={`${this.state.Title}${index}`}>
                            <Item Item={e} removeItem={this.props.removeItem} changeAmount={this.props.changeAmount}/>
                        </div>
                    ))}
                    
                </div>
                );
        }else{
            return(
                <div>

                </div>
            )
        }

        
    };
}