import React from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>kawai to do</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="new to do" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23567',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 50,
    marginBottom: 30,
    fontWeight: '200',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    width: width - 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50,50,50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 3, // 0 ~ 5
      },
    }),
  },
  input: {},
});
