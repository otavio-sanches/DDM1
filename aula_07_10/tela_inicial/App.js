import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView, Button} from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <ScrollView style={styles.scflex}>      
      <Text>Digite Aqui!</Text>
      <TextInput placeholder='teste'></TextInput>
      <Button onPress='' title='botão'></Button>
      </ScrollView>
    </View>
    

  );
}

const styles = StyleSheet.create({
  scflex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#0ae02d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
