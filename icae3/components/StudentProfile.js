import { StyleSheet, Text, View, ScrollView, Image ,Button} from "react-native";
import { Divider, Card } from "react-native-paper";
import StudentList from "./StudentList";
import { useNavigation } from "@react-navigation/native";

export default function StudentProfile({ route }) {
  const { student } = route.params;
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <Image source={require("../assets/logo.png")} />
      </View>

      <View style={styles.body}>
        <Card>
          <View>
            <Image source={student.profile_pic}style={styles.image}/>
          </View>
          <View>
            <Text style={styles.Sname}>{student.name}</Text>
            <Text style={styles.info}>
              Age:{student.age} | Gender:{student.gender}
            </Text>
          </View>
          <Divider />
          <View style={styles.section}>
            <Text> Information </Text>
            <Text>ID:{student.id}</Text>
            <Text>Gender:{student.gender}</Text>
            <Text>Age:{student.age}</Text>
            <Text>Course:{student.course_name}</Text>
          </View>
          <View>
            <Button title="Home" icon='home' style={styles.Button} onPress={()=>{navigation.navigate('StudentList')}}/>
            <Button title="Update"  style={styles.Button} onPress={()=>{navigation.navigate('StudentUpdate')}}/>

          </View>
        </Card>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  f: {
    backgroundColor: "purple",
    color: "white",
    height: 50,
    textAlign: "center",
    padding: 20,
  },
  card: {
    margin: 8,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#fff",
    width: "90%",
  },
  body: {
    flex: 5,
    width: "100%",
    alignItems: "center",
  },
  Sname: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign:'center'
  },
  section: {
    alignItems: "flex-start",
    marginBottom: 8,
    width: "100%",
  },
  info:{
    textAlign:'center'
  },
  image:{
    marginBottom: 16,
        alignItems: "center"
  },
  Button:{
    height: 60,
    width: 60,
    borderRadius: 8, // Slightly rounded corners
    backgroundColor: '#4b0150',
    margin: 2
  }
});
