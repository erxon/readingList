import React, { useState, useEffect} from "react";
import Titlebar from "./Titlebar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function MainItem() {
    
    const editButtonStyle = {
        backgroundColor: "#2692FF",
        color: "#fff",
        paddingRight: "15px",
        paddingLeft: "15px"
    };
    const deleteButtonStyle = {
        backgroundColor: "#D40000",
        color: "#fff",
        paddingRight: "15px",
        paddingLeft: "15px"
    };
    const customStyles = {
        mainItem:{
            margin: "35px",
            padding: "1% 7%"
        },
        contents: {
            paddingRight: "300px"
        }
    };
    const { itemId } = useParams();
    const [item, setItem] = useState({
        title: "",
        content: "",
        addedAt: ""
    });
    const url = "https://serene-lake-49034.herokuapp.com/readings/item/"+itemId;


    useEffect(()=>{
        function getItem(){
            axios.get(url)
            .then((res) => {
                setItem({
                    title: res.data.title,
                    content: res.data.content,
                    addedAt: res.data.addedAt.substring(0, 10)
                });
            })
            .catch((err) => console.log(err));
        }
        getItem();
    }, []);

    function handleClick(){
        axios.delete("https://serene-lake-49034.herokuapp.com/readings/item/"+itemId)
        .then(() => { window.location = "https://serene-lake-49034.herokuapp.com/" })
        .catch((err) => { console.log(err) });
        
    }
    
    const path = "https://serene-lake-49034.herokuapp.com/readings/edit/"+itemId;
    return (
        <div>
            <Titlebar />
            <div style={customStyles.mainItem}>
                <div>
                <h1>{item.title}</h1>
                <p>{item.addedAt}</p>
                <div style={customStyles.contents} className="mt-4">
                    <p >{item.content}</p>
                </div></div>
                

                <div className="mt-5">
                    <Link to={path}><button className="btn" style={editButtonStyle}>Edit</button></Link>
                    <button
                        type="button"
                        className="btn mx-3"
                        style={deleteButtonStyle}
                        data-bs-toggle="modal"
                        data-bs-target="#deleteConfirmation">Delete</button>
                </div>

            </div>
            <div className="modal fade" id="deleteConfirmation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Are you sure you want to delete this item?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            This action cannot be undone
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button 
                                type="button"
                                onClick={handleClick}  
                                className="btn btn-primary">Proceed
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MainItem;