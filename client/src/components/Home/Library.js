import React from "react";
import Item from "./Item";
import {Link} from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';

function Library(props){
    const customStyles = {
        library: {
            marginLeft: "30px",
            marginTop: "30px",
            border: "1px solid #707070",
            padding: "15px"
        },
        libraryHeading:{
            display: "inline-block"
        }
    }
    return(
        <div style={customStyles.library}>
            <h1 className="me-3" style={customStyles.libraryHeading}>Library</h1>
            <Link to="https://serene-lake-49034.herokuapp.com/readings/add"><IconButton size="small" sx={{marginBottom: "15px"}} variant="outlined">
                <AddCircleOutlineIcon fontSize="large" sx={{color: "#000"}}/>
            </IconButton></Link>
            {props.items.length > 0 ? props.items.map(item => {
                return (
                    <Item 
                        key={item._id} 
                        id={item._id}
                        title={item.title} 
                        content={item.content}
                        date={item.addedAt}
                    />
                );
            }) : null}
        </div>
    );
    
}



export default Library;