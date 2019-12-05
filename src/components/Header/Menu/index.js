import React, {Component} from 'react';
import MenuItem from './MenuItem';

export default class Menu extends Component{
    render(){
        // const { items = [] } = this.props;
        // console.log(items[0].title);
        return(
            <ul className="header__menu">
                <MenuItem />
                {/* {items.map(item=>{
                    return <MenuItem 
                            key={item.id}
                            title={item.title}
                            url={item.url}/>
                }) } */}
        
            </ul>
        )
    }
}