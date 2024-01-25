import React from "react";
import Card from "./Card"
import Os from "../assets/os.jpg";
import Dbms from "../assets/dbms.jpg"
import SoftwareTesting from "../assets/softwareTesting.jpg"
import Evs from "../assets/evs.jpg"
// import "../App.css";

function Subject(){
    return <>
    <div className="my-20 text-4xl text-center">
        <h1>Subjects</h1>
    </div>
        <div className="CardsContainer mx-5 sm:mx-0">
        <Card name="Oprating System" img={Os} link="/oprating-System" shortIntro="All about the fuctions and works of the Oprating System." />
        <Card name="DBMS" img={Dbms} link="/dbms" shortIntro="All about how to manage your data with tools like MySQL, MongoDb, etc." />
        <Card name="Software Testing" link="/" img={SoftwareTesting} shortIntro="All about how to and why to test your software, while developing it." />
        <Card name="Environment Studies" link="/evs" img={Evs} shortIntro="All about our environment, how to make it safe and who is damaging it." />
        </div>
        </>
}

export default Subject;