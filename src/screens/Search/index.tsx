import React,{FC, useState} from 'react'
import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import Header from '../../components/Header';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import MovieBox from '../../components/MovieBox';



const Search:FC = () => {
  const [filme, setFilme] = useState<string>('');
  const [searched, setSearched] = useState<any>([])

  const handleClick = () =>{
    console.log(filme)
    fetch('https://api.themoviedb.org/3/search/movie?query='+filme+'&api_key=e4c88b807f7cda2ae3f919781eb120db&language=en-US&page=1&include_adult=false',{
      method:"GET"
    })
    .then(response => response.json())
    .then(data =>{
      setSearched(data.results)
      console.log(data.results)
    })
  }

  return (
    <View style={styles.container}>
      <Header title='Search'/>
      <View style={styles.entrada}>
        <TextInput
              style = {styles.input}
              placeholder='Search'
              placeholderTextColor={"#fff"}
              onChangeText={(v) => setFilme(v)}
          />
          <TouchableOpacity style={styles.input2} onPress={handleClick}>
            <Text style={{color:'#fff', fontWeight:'bold'}}>Ok</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.entrada}>
        <FlatList
        style={{marginLeft:RFValue(25)}}
          numColumns={2}
          data={searched}
          renderItem={(movie) => searched.lenght!=0? <MovieBox overview={movie.item.overview} movieid={movie.item.id} imagem={movie.item.poster_path} height={145} width={100} marginRight={13} marginTop={15} banner={movie.item.backdrop_path} rating={movie.item.vote_average} filmeTitle={movie.item.original_title}/> :null}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:24,
    flex: 1,
    backgroundColor: '#242A32',
  },
input:{
  flex:1,
  borderRadius:RFValue(16),
  padding:RFValue(7),
  backgroundColor:"#3A3F47",
  fontSize:14,
  marginTop:RFValue(24),
  color:'#fff',
  marginBottom:RFValue(20),
},
input2:{
  flex:1,
  marginLeft:RFValue(6),
  borderRadius:RFValue(5),
  alignItems:'center',
  justifyContent:'center',
  padding:RFValue(7),
  backgroundColor:"#0296E5",
  fontSize:14,
  marginTop:RFValue(24),
  marginBottom:RFValue(20),
},
entrada:{
  flexDirection:'row',
}
});

export default Search