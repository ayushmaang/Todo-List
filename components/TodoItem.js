import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { View, CheckBox, Body } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
  },

  row: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

const propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    createdAt: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

// the todo item goes here
class TodoItem extends Component {
  state = {
    completed: false,
  };

  render() {
    const { todo, onUpdate } = this.props;

    this.state.completed = todo.completed;

    return (
      <View style={styles.row}>
        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            paddingRight: 10,
            paddingVertical: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log(todo.completed);
              todo.completed = this.state.completed ? false : true;
              this.state.completed = this.setState({
                completed: this.state.completed ? false : true,
              });
            }}
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "row",
            }}
          >
            <CheckBox
              checked={this.state.completed}
              onPress={() => {
                todo.completed = this.state.completed ? false : true;
                this.state.completed = this.setState({
                  completed: this.state.completed ? false : true,
                });
              }}
            />
            <Body
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                paddingLeft: 25,
              }}
            >
              <Text
                style={{
                  color: this.state.completed ? "grey" : "black",
                  textDecorationLine: this.state.completed
                    ? "line-through"
                    : "none",
                }}
              >
                {todo.title}
              </Text>
            </Body>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log(todo)}
            style={{ paddingLeft: 25, paddingRight: 15 }}
          >
            <Ionicons
              name="ios-trash-outline"
              color={`${todo.title.length > 0 ? "black" : "grey"}`}
              size={23}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

TodoItem.propTypes = propTypes;

export default TodoItem;
