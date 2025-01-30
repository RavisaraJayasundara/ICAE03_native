import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { students } from "../components/StudentsDb";

export default function StudentList() {
  return (
    <ScrollView>
      <View>
        <Image source={require("../assets/logo.png")} />
      </View>

      <View>
        <FlatList
          data={students}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image source={item.profile_pic} style={styles.image} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    
        <Text style={styles.f}>UoV @ 2025</Text>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    margin: 10,
  },
 f:{
    backgroundColor:"purple",
    color:"white",
    height:50,
    textAlign:"center",
    padding:20
 }
  
});
