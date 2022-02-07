import React, { useState, useEffect } from "react";
import Titlebar from "./Titlebar";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditItem(){
    const buttonStyle ={
        backgroundColor: "#47CB62",
        borderRadius: "10px",
        color: "#fff"
    };

    const customStyles = {
        editItemForm: {
            margin: "40px",
            padding: "1% 7%"
        },
        titleInput: {
            borderRadius: "20px",
            border: "1px solid #707070",
            width: "50%"
        },
        contentInput: {
            borderRadius: "5px",
            padding: "10px"
        },
        titleLabel: {
            display: "inline-block"
        }
    };
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const url = "http://localhost:5000/readings/item/"+itemId;

    useEffect(()=>{
        function getItem(){
            axios.get(url)
            .then((res) => {
                setItem(res.data);
            }).catch((err) => console.log(err));
        }
        getItem();
    }, []);
    
    function handleChange(event){
        const { name, value } = event.target;

        setItem((prevValue) => {
            return({
                ...prevValue,
                [name]: value
            });
        });
    }
    function handleSubmit(event){
        event.preventDefault();
        
        const updatedItem = {
            title: item.title,
            content: item.content,
            addedAt: item.addedAt,
            updatedAt: new Date().toString()
        }

        axios.patch("http://localhost:5000/readings/item/"+itemId, updatedItem)
        .then((res) => { console.log(res)})
        .catch((err) => { console.log(err)});

        window.location = "/readings/item/" + itemId;
    }
    return(
        <div>
            <Titlebar />
            <div style={customStyles.editItemForm}>
                <form onSubmit={handleSubmit}>
                    <p style={customStyles.titleLabel}>Title </p>
                    <input 
                        style={customStyles.titleInput}
                        className="py-1 px-2 mx-3" 
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={item.title}
                    /> 
                    <div className="mt-3">
                        <p className="form-label">Content </p>
                        <textarea
                            style={customStyles.contentInput}
                            rows="5"
                            cols="95"
                            name="content"
                            onChange={handleChange}
                            value={item.content}
                        ></textarea> 
                    </div>
                    
                    <button type="submit" className="btn mt-3" style={buttonStyle}>Apply</button>
                </form>
                
            </div>
        </div>
    );
}

export default EditItem;