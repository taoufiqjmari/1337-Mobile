import { registerRootComponent } from 'expo';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('0');

  const onButtonPress = (value) => {
    console.log(`button pressed :${value}`);
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setInput('0');
      setResult('0');
    } else if (value === 'C') {
      setInput((prev) => prev.slice(0, -1));
    } else {
      if ((input + value).length < 20) {
        if (Number(input) === 0) setInput(value);
        else setInput(input + value);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Calculator</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          value={input}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {[
          '7',
          '8',
          '9',
          'C',
          'AC',
          '4',
          '5',
          '6',
          '+',
          '-',
          '1',
          '2',
          '3',
          '*',
          '/',
          '0',
          '.',
          '00',
          '=',
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => onButtonPress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#607d8b',
    fontSize: 15,
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 40,
    color: 'white',
  },
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#37464e',
  },
  resultText: {
    fontSize: 40,
    color: 'white',
    paddingRight: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#37464e',
  },
  inputText: {
    fontSize: 30,
    color: 'white',
    paddingRight: 10,
  },
  buttonContainer: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#607d8b',
  },
  button: {
    width: '20%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});

registerRootComponent(App);
