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
    const {isCompleted, isEditing} = this.state;
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
        <Text
          style={[
            styles.text,
            isCompleted ? styles.completedText : styles.uncompletedText,
          ]}>
          Iam to do
        </Text>

        {isEditing ? (
          <View style={styles.actions}>
            <TouchableOpacity onPressOut={this._finishEditing}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>✅</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.actions}>
            <TouchableOpacity onPressOut={this._startEditing}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>📝</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>❌</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
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

  _startEditing = () => {
    this.setState({isEditing: true});
  };

  _finishEditing = () => {
    this.setState({isEditing: false});
  };
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    marginRight: 10,
  },
  completedCircle: {
    borderColor: "#BBB",
  },
  uncompletedCircle: {
    borderColor: "#F23567",
  },
  completedText: {
    color: "#bbb",
    textDecorationLine: "line-through",
  },
  uncompletedText: {
    color: "#353839",
  },
  columns: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width / 2,
  },
  actions: {flexDirection: "row"},
  actionContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  actionText: {},
});
