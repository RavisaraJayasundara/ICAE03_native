import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

export default function App() {
  return (
    <View style={styles.container}>
      <AddStudent/>
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
