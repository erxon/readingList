import React from "react";
import {Link} from "react-router-dom";

function Item(props){
    const customStyles = {
        contentPrev:{
            display: "inline-block"
        },
        item:{
            border: "1px solid #707070",
            margin: "10px",
            padding: "10px"
        },
        readMore: {
            color: "#2692FF",
            textDecoration: "none"
        }
    }
    const path = "https://serene-lake-49034.herokuapp.com/readings/item/" + props.id;
    return(
        <div style={customStyles.item}>
            <h2>{props.title}</h2>
            <p>{props.date.substring(0, 10)}</p>
            <p style={customStyles.contentPrev}>
            {   props.content.length > 50 ? props.content.substring(0, 50) + "...": 
                props.content}
            </p>
            <Link style={customStyles.readMore} className="mx-3" to={path}>Read more</Link>
        </div>
        
    );
}

export default Item;