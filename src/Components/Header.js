import {logo_url} from "../Utils/constants";


const Header= ()=>{
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
                </ul>
            </div>
        </div>
    );

};

export default Header;