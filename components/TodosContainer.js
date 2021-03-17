import React from "react";
import { StyleSheet, StatusBar, ScrollView, FlatList } from "react-native";
import { View, Text } from "native-base";

import TodoModel from "./../api/todos";
import Header from "../components/Header";
import COLORS from "../constants/Colors";
import AddTodoButton from "../components/AddTodoButton";
import AddTodo from "./AddTodo";
import TodoItem from "../components/TodoItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  row: {
    top: 15,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// will render todos based on the active screen: all, active or completed
export default class TodosContainer extends React.Component {
  state = {
    addingTodo: false,
  };

  todos = [{ title: "Hi" }];

  componentDidMount() {
    // includes the methods for creation, updation and deletion
    this.api = new TodoModel("react-todos");
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
        <ScrollView>
          {this.state.addingTodo ? (
            <View style={styles.row}>
              <AddTodo
                onAdd={(todo) => {
                  this.setState({ addingTodo: false });
                  this.todos.push({ title: todo.title });
                }}
                onCancelDelete={() => this.setState({ addingTodo: false })}
                onBlur={() => this.setState({ addingTodo: false })}
              />
            </View>
          ) : (
            <FlatList
              data={this.todos}
              renderItem={({ item: todo, todos }) => (
                <TodoItem
                  todo={todo}
                  onUpdate={() => {
                    console.log(todo.completed);
                    todo.completed = todo.completed ? false : true;
                  }}
                />
              )}
            />
          )}
        </ScrollView>
        <View></View>
        <AddTodoButton onPress={() => this.setState({ addingTodo: true })} />
      </View>
    );
  }
}
