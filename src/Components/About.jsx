import Profile from "./ProfileClass"
import React from "react";
import {useEffect} from "react"
const About = ()=>{

   useEffect(()=>{
    const interval = setInterval(()=>{
        console.log("Component mount");
    },1000)
    return ()=>{
        clearInterval(interval);
        console.log("Component unmount")
    }
   })

    return <>
    <h1>This is about me </h1>
    <Profile name = "Saloni Pandey"/>
    </>
}
// class About extends React.Component{
//     constructor(props){
//         super(props)
//         console.log("hello1")
//     }
//     // async componentDidMount(){
//     //     let data = await fetch("https://api.github.com/users/Saloni-FED");
//     //     console.log(data);
//     //     }
    
    
//     render(){
//         console.log("Hello2")
//         return <div className="about">
//             <h1>This About me</h1>
//             <Profile name = "Saloni Pandey"/>
//         </div>
//     }
// }

export default About;