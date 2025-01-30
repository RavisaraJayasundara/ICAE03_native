import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import StudentProfile from './components/StudentProfile';

export default function App() {
  
//const Stack = createNativeStackNavigator
  return (
    <View style={styles.container}>
     <StudentProfile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
