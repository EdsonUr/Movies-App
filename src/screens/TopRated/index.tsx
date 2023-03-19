import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { FC,useEffect, useState } from 'react';
import MovieBox from '../../components/MovieBox';

const TopRated:FC = () => {
    const[topRated, setTopRated] = useState<any>([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=e4c88b807f7cda2ae3f919781eb120db',{

        })
        .then(response => response.json())
        .then(data =>{
            setTopRated(data.results)
        })
    })

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={topRated}
        renderItem={(movie) => <MovieBox overview={movie.item.overview} movieid={movie.item.id} imagem={movie.item.poster_path} height={145} width={100} marginRight={13} marginTop={15}  banner={movie.item.backdrop_path} rating={movie.item.vote_average} filmeTitle={movie.item.title}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A32',
  },
});

export default TopRated;