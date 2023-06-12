import Profile from "./ProfileClass"
import React from "react";
// const About = ()=>{
//     return <>
//     <h1>This is about me </h1>
//     <Profile name = "Saloni Pandey"/>
//     </>
// }
class About extends React.Component{
    constructor(props){
        super(props)
        console.log("hello1")
    }
    componentDidMount(){
        console.log("Hello3")
    }
    
    render(){
        console.log("Hello2")
        return <div className="about">
            <h1>This About me</h1>
            <Profile name = "Saloni Pandey"/>
        </div>
    }
}

export default About;