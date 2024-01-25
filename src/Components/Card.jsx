import React from "react";
// import BtnAll from "./BtnAll";
import "../App.css"
import { Link } from "react-router-dom";

function Card(props){
    return <div className="card"> 
           <img src={props.img} alt="" />
           <br />
           <div className="cardText">
           <h2>{props.name}</h2>
           <hr />
           <br />
           <p>{props.shortIntro}</p>
           <Link to={props.link}> <button className="p-2 hover:border-black bg-blue-600 hover:bg-white hover:text-black text-white border-blue-600 border-2 mt-5 rounded-md">read Notes</button> </Link>
           </div>
    </div>
}

export default Card;