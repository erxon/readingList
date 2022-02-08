import React, { useState } from "react";
import Titlebar from "./Titlebar";
import axios from "axios";

function AddItem(){
    // Make a post request in the server with the state object
    const buttonStyle ={
        backgroundColor: "#47CB62",
        borderRadius: "10px",
        color: "#fff"
    };
    const customStyles = {
        addItemForm: {
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
    

    const [input, setInput] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const { name, value } = event.target;
        setInput((prevValue) => {
            return {...prevValue,
                [name]: value
            }
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        
        const newItem = {
            title: input.title,
            content: input.content,
            addedAt: new Date().toString(),
            updatedAt: ""
        }

        axios.post("http://localhost:5000/readings/", newItem)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

        window.location = "/";
    }
    return(
        <div>
            <Titlebar />
            <div style={customStyles.addItemForm}>
            <form onSubmit={handleSubmit}>
                <p style={customStyles.titleLabel}>Title </p>
                    <input
                        onChange={handleChange}
                        style={customStyles.titleInput}
                        className="py-1 px-2 mx-3" 
                        type="text"
                        name="title"
                        placeholder="Type the title here"
                    /> 
                    <div className="mt-3">
                        <p className="form-label">Content </p>
                        <textarea
                            onChange={handleChange}
                            style={customStyles.contentInput}
                            rows="5"
                            cols="95"
                            name="content"
                            placeholder="Add link or some text here"
                        ></textarea> 
                    </div>
                    <button type="submit" className="btn mt-3" style={buttonStyle}>Add</button>
            </form>
                
            </div>
        </div>
    );
}

export default AddItem;