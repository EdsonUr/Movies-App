import React,{FC} from 'react'
import { Text } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";

interface Props{
    texto:string
}

const About = () =>{
    const route = useRoute()
    const {texto} = route.params as Props
    return(
        <Text> {texto} </Text>
    )
}

export default About