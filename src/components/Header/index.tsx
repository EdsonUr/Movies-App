import React,{FC} from "react";
import { View, Text, StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome'
import {useNavigation} from "@react-navigation/native"

interface Props{
    title: string,
    padding?:number
}

const Header:FC<Props> = ({title,padding}) =>{
    const navigation = useNavigation<any>()
    return(
        <View style={{backgroundColor:'#242A32',width:'100%',height:RFValue(70),flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',padding:padding?padding:0}}>
            <Icon name="chevron-left" size={18} color='#fff' onPress={()=> navigation.goBack()}/>
            <Text style={{fontWeight:'bold', color:'#fff', fontSize:18}}> {title} </Text>
            <Icon name="question" size={22} color='#fff'/>
        </View>
    )
}

export default Header;