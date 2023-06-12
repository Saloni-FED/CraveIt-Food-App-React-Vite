import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            url : " ",
            status: " "
        }
        console.log("Hello4")
    }
     async componentDidMount(){
        let data = await fetch("https://api.github.com/users/Saloni-FED");
        console.log(data.ok);
        this.setState({
            url:data.url,
            status:data.status,
            
        })
    //    this.interval = setInterval(()=>{
    //     console.log("saloni")
    //    },1000)
    }
    // componentWillUnmount(){
    //     clearInterval(this.interval);
    // // }
    
    render(){
        console.log("Hello Kunal")
        return <div className="Profile">
            <h2>Hello</h2>
            <h3>My name is {this.props.name}</h3>
            <h3>Url : {this.state.url}</h3>
            <h3>Okay :  {this.state.status}</h3>
            {/* <h3>Status:  {this.state.okay} </h3> */}
            <h3>{this.state.count}</h3>
            <button onClick = {()=>{
                this.setState({
                    count: 1
                })
            }}
            >Counter</button>
        </div>
    }
}
export default Profile;