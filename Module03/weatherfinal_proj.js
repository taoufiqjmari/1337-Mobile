import { registerRootComponent } from 'expo';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Screens
const Currently = ({ location }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Currently</Text>
      <Text style={styles.text}>{location}</Text>
    </View>
  );
};
const Today = ({ location }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today</Text>
      <Text style={styles.text}>{location}</Text>
    </View>
  );
};
const Weekly = ({ location }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weekly</Text>
      <Text style={styles.text}>{location}</Text>
    </View>
  );
};

const SearchBar = ({ setLocation }) => {
  const [text, setText] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="search" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Search location"
          value={text}
          onChangeText={setText}
          onSubmitEditing={() => {
            setLocation(text);
            setText('');
          }}
        />
        <Icon
          style={styles.searchIcon}
          name="location-arrow"
          size={20}
          onPress={() => setLocation('Geolocation')}
        />
      </View>
    </View>
  );
};

const Home = ({ location }) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator tabBarPosition="bottom" initialRouteName="Currently">
      <Tab.Screen
        name="Currently"
        options={{
          tabBarIcon: () => <Icon name="sun-o" size={20} />,
        }}
      >
        {() => <Currently location={location} />}
      </Tab.Screen>
      <Tab.Screen
        name="Today"
        options={{
          tabBarIcon: () => <Icon name="calendar-o" size={20} />,
        }}
      >
        {() => <Today location={location} />}
      </Tab.Screen>
      <Tab.Screen
        name="Weekly"
        options={{
          tabBarIcon: () => <Icon name="calendar" size={20} />,
        }}
      >
        {() => <Weekly location={location} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default function App() {
  const [location, setLocation] = useState('');
  const Stack = createStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerTitle: () => (
                <SearchBar location={location} setLocation={setLocation} />
              ),
            }}
          >
            {() => <Home location={location} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    width: '90%',
    color: '#000',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

registerRootComponent(App);
