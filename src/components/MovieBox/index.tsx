import React, {FC} from 'react'
import { ImageBackground, TouchableOpacity,Text } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {useNavigation} from "@react-navigation/native"

interface Props{
    imagem:string,
    banner:string,
    rating:number,
    filmeTitle:string,
    width?:number,
    height?:number,
    marginRight?: number,
    marginTop?: number,
    marginBottom?: number,
    movieid:string,
    overview:string,
}

const MovieBox:FC<Props> = ({imagem,banner,rating,filmeTitle, width, height, marginRight,marginTop, movieid,overview}) =>{
    const navigation = useNavigation<any>()
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate('Details',{banner,imagem,rating,filmeTitle,movieid,overview})}>
                <ImageBackground borderRadius={RFValue(16)} style={{flex:1, height:height?RFValue(height):RFValue(210), width:width?RFValue(width):RFValue(144), marginRight:marginRight?RFValue(marginRight):RFValue(30), marginTop:marginTop?RFValue(marginTop):0}} source={{uri:'https://image.tmdb.org/t/p/w500'+imagem}}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
})

export default MovieBox;