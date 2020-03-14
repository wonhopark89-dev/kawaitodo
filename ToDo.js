/* eslint-disable quotes */
import React, {Component} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const {width, height} = Dimensions.get("window");

export default class ToDo extends Component {
  state = {
    isEditing: false,
    isCompleted: false,
  };
  render() {
    const {isCompleted} = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._toggleComplete}>
          <View
            style={[
              styles.circle,
              isCompleted ? styles.completedCircle : styles.uncompletedCircle,
            ]}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Iam to do</Text>
      </View>
    );
  }

  _toggleComplete = () => {
    this.setState(preState => {
      return {
        isCompleted: !preState.isCompleted,
      };
    });
  };
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    marginVertical: 20,
    fontSize: 20,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "red",
    borderWidth: 3,
    marginRight: 20,
  },
  completedCircle: {
    borderColor: "#BBB",
  },
  uncompletedCircle: {
    borderColor: "#F23567",
  },
});
