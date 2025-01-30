import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import { TextInput } from 'react-native-web';


export default function AddStudent(){
      return(
        <ScrollView >
        <View>
            <Image source={require("../assets/logo.png")}/>
        </View>
        <View>
            <Text style={styles.text}>Add A New Student</Text>
        </View>
        <View>
            <TextInput style={styles.input} placeholder='ID' placeholderTextColor={'gray'}/>
            <TextInput style={styles.input} placeholder='Name' placeholderTextColor={'gray'}/>
            <TextInput style={styles.input} placeholder='Age' placeholderTextColor={'gray'}/>
            <TextInput style={styles.input} placeholder='Course' placeholderTextColor={'gray'}/>

        </View>
        </ScrollView>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:30
    },
    input:{
        border:"1px solid black",
        width:500,
        padding:10,
        margin:10,
        justifyContent: 'center',
    }
  });