import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props);
        // console.log(this.props.name+"child constreator");
        // this.state =
        // {
        //     count:0,
        //     count_1:1
        // }


        this.state={
            userInfo: {
                name: "Dummy",
                location: "Deafault",
                }
        }
        console.log(this.props.name + "child constreator");


        // we can create a mutliple variable inside a  class components
    }
   async  componentDidMount() {
        // console.log(this.props.name+ "child component did mount");
        // console.log(this.props.name + "child component did mount");


         const data= await fetch ("https://api.github.com/users/Rishabh1-dubey");
        const json= await data.json();


        this.setState({
            userInfo:json,
        })
        console.log(json);
    }
    render() {

        // console.log(this.props.name+"child render");
        // const {name, location}=this.props; 
        // const {count, count_1}=this.state; 
        const{name,location, avatar_url
        }=this.state.userInfo;
        return (
            <div className=" user-info">

                {/* <h1>Count:{count}</h1> */}
                {/* <button
            onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                });
            }}>Increase Number</button> */}
                {/* <h1>Count-2:{count_1}</h1> */}
                <img src={avatar_url
}/>
                <h1>Name:{name}</h1>
                <h2>Location: {location}</h2>
                <h3>Conatct : rishabhdubey06</h3>
            </div>
        );
    }
}
export default UserClass;