import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

const ListItem = (props) => {
  return (
    <ListGroup.Item className="list-items">
        {props.item}
        <span className="close-button" onClick={props.onClick}>&#x2716;</span>
    </ListGroup.Item>
  );
};

export default ListItem;