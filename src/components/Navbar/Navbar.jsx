import { useState } from "react";
import { assets, menu_list } from "../../assets/assets";
import "./Navbar.css";

const Navbar=()=>{
    const[menu,setMenu]=useState("menu");
    return(
        <>
        <div className="navbar">
            <img className="logo" src={assets.logo} alt="logo"/>
            <ul className="navbar-menu">
                <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
                <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
                <li onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</li>
                <li onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>Contact</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon}></img>
                <div className="basket">
                   <img src={assets.basket_icon}></img>
                   <div className="dot"></div>
                </div>
                <button className="signin">Sign In</button>
            </div>
        </div>
        </>
    )
}
export default Navbar;