import React,{useState} from 'react'
import {Image,View,Text,TextInput,StyleSheet,Button,FlatList,SafeAreaView} from 'react-native'

const InputOutputRep = () =>{

    const [dataSource, setDataSource] = useState([]);

    useState(() => {
      let items = Array.apply(null, Array(60)).map((v, i) => {
        return {
          id: i,
          src: 'http://placehold.it/200x200?text=' + (i + 1)
        };
      });
      setDataSource(items);
    }, []);


    return(
<View style={styles.container}>
        <Text style={{fontWeight:'bold'}}>Daily Input and Output detail</Text>
        <View>
            <Text>Date From</Text>
            <TextInput></TextInput>
            <Text>Date To</Text>
            <TextInput></TextInput>            
        </View>
        <View>
            <Text> Machine</Text>
            <TextInput></TextInput>
        </View>
        <View>
            <Text>Division</Text>
            <Button></Button>
        </View>
        <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1
            }}>
            <Image
              style={styles.imageThumbnail}
              source={{uri: item.src}}
            />
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
</View>

    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItem: 'center',
        justifyContent: 'center',
    }
});
export default InputOutputRep