import React from "react";
import {Link} from "react-router-dom";
function Titlebar(props){
    const customStyles = {
        navbar: {
            backgroundColor: "#2d2d2d",
            padding: "2% 7%"
        },
        navbarBrand: {
            paddingLeft: "30px",
            paddingBottom: "0",
            marginBottom: "0",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "24px",
            cursor: "pointer",
        }
    }
    return(
        <div>
            <nav style={customStyles.navbar} className="navbar navbar-dark">
                <div className="container-fluid">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <h1 style={customStyles.navbarBrand} className="navbar-brand">My Reading List</h1>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Titlebar;