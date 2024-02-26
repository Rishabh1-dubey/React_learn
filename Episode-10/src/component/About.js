import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About =()=>{
//     return(
//         <div>
//             <h1>Hello</h1>
//             <User name= {"this is rishabh function"}/>
//             <UserClass name ={"this is rishabh class"}  location={"Siddharth Nagar class"}/>
             
//         </div>
//     )
// }



// crating a class based about section

class About extends React.Component{

    constructor (props){
        super(props)
        console.log("parent conststrator")
    }
componentDidMount (){
    console.log("parant comoponent did mount");
}
        render(){
        console.log("parent render");
        return(
                    <div>
                        <h1>Hello this is about section</h1>
 <UserClass name ={"Rishabh"}  location={"Siddharth Nagar class"}/>
                 {/* <User name= {"this is rishabh function"}/> */}
 {/* <UserClass name ={"Rajat"}  location={"Mumbai"}/>
 <UserClass name ={"Upma"}  location={"Mumbai"}/> */}
                         
                    </div>
                )

    }

    
}
export default About;