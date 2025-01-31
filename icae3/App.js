import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import StudentProfile from './components/StudentProfile';
import StudentUpdate from './components/StudentUpdate';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={
      {
        headerStyle:{backgroundColor:'purple'},
        headerTintColor:'white',
        headerTitleAlign:'center'
      }
    }>
           <Stack.Screen name='StudentList' component={StudentList} options={{title:" List of Students"}}/>
           <Stack.Screen name='AddStudent' component={AddStudent} options={{title:" Add New Student"}}/>
           <Stack.Screen name="Profile" component={StudentProfile} options={{title:"Student's Profile"}} />
           <Stack.Screen name='StudentUpdate' component={StudentUpdate} options={{title:"Update the Student"}}/>
    </Stack.Navigator>

    </NavigationContainer>

    
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
