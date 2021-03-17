import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

class CompletedScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={[
              { title: "Devin's Status: Vaccinated" },
              { title: "Dan" },
              { title: "Dominic" },
              { title: "Jackson" },
              { title: "James" },
              { title: "Joel" },
              { title: "John" },
              { title: "Jillian" },
              { title: "Jimmy" },
              { title: "Julie" },
            ]}
            renderItem={({ todo }) => <Text>{todo.title}</Text>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -1,
    backgroundColor: "#B8D8D8",
    justifyContent: "flex-start",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
  },
  button: {
    borderRadius: 30,
    maxWidth: "75%",
    alignSelf: "center",
  },

  header: {
    shadowColor: "transparent",
    elevation: 0,
    borderBottomWidth: 0,
    backgroundColor: "#B8D8D8",
    justifyContent: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    textAlign: "center",
  },
  list: {
    paddingTop: 22,
    borderRadius: 30,
    backgroundColor: "#B8D8D8",
  },
});

export default CompletedScreen;
