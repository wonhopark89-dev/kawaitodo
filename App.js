/* eslint-disable quotes */
import React from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Platform,
  ScrollView,
} from "react-native";
import ToDo from "./ToDo";

const {width, height} = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newTodo: "",
  };

  render() {
    const newTodo = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>kawai to do</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="new to do"
            value={newTodo}
            onChangeText={this._controllNewToDo}
            placeholderTextColor="#999"
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <ScrollView contentContainerStyle={styles.newTodos}>
            <ToDo />
          </ScrollView>
        </View>
      </View>
    );
  }

  _controllNewToDo = text => {
    this.setState({
      newTodo: text,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F23567",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    marginBottom: 30,
    fontWeight: "200",
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    width: width - 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50,50,50)",
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
  input: {
    padding: 20,
    fontSize: 25,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
  },
  newTodos: {
    alignItems: "center",
  },
});
