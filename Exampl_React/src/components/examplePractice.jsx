import React from "react";
import { useState } from "react";



const ExamplePractice = () => {

    // the same with using constructor in class component
    const [lists]= useState([
        {id: 1, name: "Shambel"},
        {id: 2, name: "Simelo"},
        {id: 3, name: "Dechu"}
    ]);
return(
    <header>
        <nav>
            <ul>
               {
                lists.map((list)=> <li key={list.id}>{list.name}</li>)
               }
            </ul>
        </nav>
    </header>
)
}


export default ExamplePractice;