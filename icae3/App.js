import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
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
           <Stack.Screen name='List Of Student' component={StudentList} />
           <Stack.Screen name='Add New Student' component={AddStudent} />

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
