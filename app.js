import React from "react";
import ReactDOM from "react-dom/client";



// const heading= React.createElement("h1",{id: "heading"},"Hello world my name is rishbh");
//     const root= ReactDOM.createRoot(document.getElementById("root"));

//        root.render(heading);
/**
 *   <div id= parent">
 * <div id="child">
 * <h1>I'm a tag <h1>
 * <h2>I'm a tag <h2>
 * 
 * <div id="child2">
 * <h1>I'm a h1 tag</h1>
 * <h2>I'm a h2 tag</h2>
 * </div>
 * </div>
* 
 *ReacrElement(object= HTML (Browser understoods)
 */


//  const parent  = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child"},[
//     React.createElement("h1",{},"I'm a h1 tag"),
//     React.createElement("h2",{},"I'm a h2 tag"),

// ]),
//     React.createElement("div",{id:"child2"},[
//     React.createElement("h1",{},"I'm a h1 tag"),
//     React.createElement("h2",{},"I'm a h2 tag"),
//     ]),
//  ]);
// console.log(parent);
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(parent);



const elem=<span>name  is rtiedhg dife </span>
//React element
 const Title =()=>(
<h1 className="head" tabIndex="5">
    Namastee React
    </h1>
        );
        // const Rishabh=()=>(
        //     <h1>My name is rishabh and i am going to be becoome milllionaire one day</h1>
        // )
        //  console.log(jsxHeading);
//React components

// const Renio=()=>(
//     <div id="renio">
//         <Rishabh/>
//         <h1>i am the one who will not to be become him to millionaire </h1>
//     </div>
// );
 const HeadingComponent=()=>(
    <div id="component">
        <Title/>
        <h1 className="headingg"> Hello guys this is rishabh this side</h1>
    </div>
);
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<HeadingComponent/>);

