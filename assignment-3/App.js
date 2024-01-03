import React  from "react";
import ReactDOM  from "react-dom/client";
const renioImg="https://media.istockphoto.com/id/1313644269/vector/gold-and-silver-circle-star-logo-template.jpg?s=612x612&w=0&k=20&c=hDqCI9qTkNqNcKa6XS7aBim7xKz8cZbnm80Z_xiU2DI=";
import {AiOutlineUserAdd} from 'react-icons/ai';

// using createElement

// const heading=React.createElement("div",{class:"title"},[
//     React.createElement("h1",{class:"title-3"},[
//         React.createElement("h1",{},"this is h1 Tage"),
//         React.createElement("h2",{},"this is h2 Tage")
//     ])
// ]);


//using jsx

// const jsxHeading =(
//     <div className="title">
//         <h1>This is first HeadingComponent</h1>
//         <h2>This is Second Hreading component</h2>
//         <h3>This is third HeadingComponent</h3>
//     </div>

// )


// using functional compoent

const HeadingComponent=()=>(
    <div className="container">
        <div className="icon">
            <img src={renioImg} alt="logo" />
        </div>
        <div className="search">
            <input type="text" placeholder="Search here"  />
        </div>
        <div className="user">
            <AiOutlineUserAdd className="usericon" />
        </div>

    </div>
);
     const CompoentCompoisition =()=>(
        <div>
            <HeadingComponent/>
            {/* {<h1>NAmastre</h1>} */}
        </div>

     )


 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<CompoentCompoisition/>);