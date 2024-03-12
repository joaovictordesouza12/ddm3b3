import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Renan dos Santos Ferreira</Text>
      <Text>João Victor de Souza e Renan</Text>
      <Text>clone</Text>
      <Text>clone</Text>
      <StatusBar style="auto" />
      <Button title = 'Salvar'>  </Button>
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

