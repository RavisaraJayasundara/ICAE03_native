import { StyleSheet, Text, View,ScrollView ,Image} from 'react-native';

export default function StudentProfile() {
  return (
    <ScrollView>
      
      <View>
        <Image source={require('../assets/logo.png')}/>
      </View>
      <View>
         
      </View>
      <View>
        <Text style={styles.f}>UoV @ 2025</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  f:{
    backgroundColor:"purple",
    color:"white",
    height:50,
    textAlign:"center",
    padding:20
 }
});
