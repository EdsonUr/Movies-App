import React,{FC} from "react";
import { ImageBackground,View,Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props{
    foto:string,
    nome:string
}

const Actor:FC<Props> = ({foto, nome}) =>{
    return(
        <View>
            <ImageBackground  imageStyle={{borderRadius:RFValue(50)}} style={{width:100,height:100, marginRight:15, marginBottom:7}} source={{uri:'https://image.tmdb.org/t/p/w500'+foto}} />
            <Text style={{color:'#fff'}} > {nome} </Text>
        </View>
    )
}

export default Actor;