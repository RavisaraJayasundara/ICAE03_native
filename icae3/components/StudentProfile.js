import { StyleSheet, Text, View,ScrollView ,Image} from 'react-native';

export default function StudentProfile() {
  return (
    <ScrollView>
      
      <View>
        <Image source={require('../assets/logo.png')}/>
      </View>
    </ScrollView>
  );
}
