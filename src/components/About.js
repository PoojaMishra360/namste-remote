

import React from "react";
import  User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
         <div><h1>About Us</h1>
        <h2>This is Namste React Course</h2>
        {/* // Function Component */}
        <User />
        <br /> 
        {/* Class Component  */}
        <UserClass /> 
        </div>
         
    );
};


export default About;