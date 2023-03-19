import React, {FC, useEffect, useState} from "react";
import { View,StyleSheet, ImageBackground,Text, FlatList } from "react-native";
import Header from "../../components/Header";
import MovieBox from "../../components/MovieBox";
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation, useRoute } from "@react-navigation/native";
import Actor from "../../components/Actor";
import About from "../../components/About";



interface Props{
    banner:string,
    imagem:string,
    rating:number,
    filmeTitle:string,
    movieid:string,
    overview:string
}

const Details = () =>{
    const[cast, setCast] = useState<any>([]) 
    const route = useRoute()
    const {banner,imagem,rating,filmeTitle,movieid, overview}  = route.params as Props
    useEffect(()=>{
        console.log(movieid)
        console.log(overview)
        fetch('https://api.themoviedb.org/3/movie/'+movieid+'/credits?api_key=e4c88b807f7cda2ae3f919781eb120db&language=en-US',{
            method:"GET"
        })
        .then(response => response.json())
        .then(data =>{
            setCast(data.cast)
            console.log(data.cast)
        })
    },[])
    return(
        <View style={styles.container}>
            <Header title='Details' padding={24} />
            <View style={styles.containerDetails}>
                <View style={styles.ratIm}>
                    <ImageBackground  style={{height:RFValue(210), width:'100%', borderBottomLeftRadius:RFValue(16),borderBottomRightRadius:RFValue(16)}} source={{uri:`https://image.tmdb.org/t/p/w500${banner}`}}/>
                </View>
            </View>
            <View style={{flex:1, paddingHorizontal:24, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:"#fff", fontWeight:'bold',fontSize:18, marginTop:8, marginBottom:8}}>About:</Text>
                <About about={overview} />
                <Text style={{color:"#fff", fontWeight:'bold',fontSize:18, marginBottom:8}}>Cast:</Text>
                <FlatList
                    numColumns={2}
                    data={cast}
                    renderItem={(actor) => actor.item.known_for_department == "Acting"? <Actor nome={actor.item.name} foto={actor.item.profile_path} />: null}
                />  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        backgroundColor:'#242A32'
    },
    containerDetails:{
        height:RFValue(210),
        width:'100%'
    },
    ratIm:{
        height:RFValue(210),
        width:'100%'
    },
    texto:{
        color:'#fff',
        fontSize:RFValue(16)
    },
    info:{
        flexDirection:'row',
        justifyContent:'space-around'
    }
})

export default Details;