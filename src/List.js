import React from 'react';
import ListItem from './ListItem.js'

const List =(props) => {
return(
    <ul>
    {props.list.map((listItem, index) => (
          <ListItem
            key={index}
            item={listItem.name}
            onClick={props.onClick}
          />
        ))}
    </ul>
)

}
export default List;