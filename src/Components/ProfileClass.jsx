import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
        console.log("Hello4")
    }
    componentDidMount(){
        console.log("Saloni");
    }
    render(){
        console.log("Hello Kunal")
        return <div className="Profile">
            <h2>Hello</h2>
            <h3>My name is {this.props.name}</h3>
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