import { useState } from "react";

const User =(props)=>{
    const [count]= useState(0);
    const [count_1]= useState(0);

    // we can create a mutiple variable inside a function component
    return(
    <div className="user-info">
        <h1>count-1: {count}</h1>
        <h1>Count-2: {count_1}</h1>
        <h1>Name: {props.name}</h1>
        <h2>Location: Mumbai</h2>
        <h3>Conatct : rishabhdubey06</h3>
    </div>
    )
}
export default User;