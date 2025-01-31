import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { students } from "../components/StudentsDb";
import { useNavigation } from "@react-navigation/native";

export default function StudentList() {
  const navigation=useNavigation();
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
            <TouchableOpacity onPress={()=>{navigation.navigate('Profile',{student:item})}}style={styles.card}>
              <Image source={item.profile_pic} style={styles.image} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <View>
          <Button style={styles.button} title="+" onPress={()=>{navigation.navigate('AddStudent')}}/>
        </View>
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
  f: {
    backgroundColor: "purple",
    color: "white",
    height: 50,
    textAlign: "center",
    padding: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    flex: 1,
    justifyContent: "flex-end", // Aligns the button to the bottom
    alignItems: "flex-end", // Aligns the button to the right
    padding: 16, // Adds padding to avoid edge clipping
    backgroundColor: "#f9f9f9",
    Width: 40,
  },
});
