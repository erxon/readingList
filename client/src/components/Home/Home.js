import React, { useState, useEffect } from "react";
import axios from "axios";
import Titlebar from "../Titlebar";
import Library from "./Library";

export default function Home(){
    const customStyle = {
        padding: "1% 7%"
    }
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        function getAllItems(){
            axios.get("http://localhost:5000/readings/")
            .then((res) => setItems(res.data.reverse()))
            .catch((err) => console.log(err));
        }
        getAllItems();
    }, []);

    return(
        <div>
            <Titlebar />
            <div className="mx-0">
                <div style={customStyle}>
                    <Library items={items} />
                </div>
            </div>
        </div>
    );
}

