import { registerRootComponent } from 'expo';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [show, setShow] = useState(false);

  const handlePress = () => {
    setShow((prev) => !prev);
    console.log('Button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{show ? 'Hello World!' : 'Welcome!'}</Text>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Click me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    padding: 10,
  },
  buttonText: {
    color: 'olive',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: 'white',
    backgroundColor: 'olive',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});

registerRootComponent(App);
