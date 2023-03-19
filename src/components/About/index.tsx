import React,{FC} from "react";
import { ImageBackground,View,Text } from "react-native";

interface Props{
    about:string
}

const About:FC<Props> = ({about}) =>{
    return(
       <Text style={{fontSize:15, color:'#fff', marginBottom:8}}> {about} </Text>
    )
}

export default About;