import React, {FC} from 'react'
import { ImageBackground } from 'react-native';
import { View, StyleSheet, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const Input:FC = () =>{
    return(
        <TextInput
            style = {styles.input}
            placeholder='Search'
            placeholderTextColor={"#fff"}
        />
    )
}

const styles = StyleSheet.create({
    input:{
        borderRadius:RFValue(16),
        padding:RFValue(7),
        backgroundColor:"#3A3F47",
        fontSize:14,
        marginTop:RFValue(24),
        marginBottom:RFValue(20),
    }
})

export default Input;