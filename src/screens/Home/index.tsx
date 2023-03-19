import { StyleSheet, Text, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import MovieBox from '../../components/MovieBox';
import Input from '../../components/Input';
import TabsUp from '../../routes/tabsUp';
import { RFValue } from 'react-native-responsive-fontsize';

const Home:FC = () => {
    const[trending, setTranding] = useState<any>([])

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/trending/all/week?api_key=e4c88b807f7cda2ae3f919781eb120db',{
            method:"GET"
        })
        .then(response => response.json())
        .then(data =>{
            setTranding(data.results)
        })
    })

  return (
    <View style={styles.container}>
        <View style={styles.firstInformation}>
            <Input/>  
            <FlatList
                horizontal
                data={trending}
                renderItem={(movie) => <MovieBox overview={movie.item.overview} movieid={movie.item.id} imagem={movie.item.poster_path} banner={movie.item.backdrop_path} rating={movie.item.vote_average} filmeTitle={movie.item.original_title ? movie.item.original_title : movie.item.name} />}
            />
        </View>
      <TabsUp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:24,
    flex: 1,
    backgroundColor: '#242A32',
  },
  firstInformation:{
    marginTop:RFValue(30),
    flex:1/1.04,
    flexDirection:'column',
  }
});

export default Home;