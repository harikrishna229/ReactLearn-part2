import { useState } from "react";
import {logo_url} from "../Utils/constants";



const Header= ()=>{
    const [logintext, setlogintext] = useState("Login");

    return (
        <div className="Header">
            <div className="logocontainer">
                <img className="logo" src={logo_url}/>
            </div>
            <div className="navitems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button onClick={()=>{
                        logintext==="Login"? setlogintext("Logout"): setlogintext("Login");
                    }}>{logintext}</button>
                </ul>
            </div>
        </div>
    );

};

export default Header;