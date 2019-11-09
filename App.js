import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Image
            style={{ marginBottom: 20 }}
            source={require("./assets/back.png")}
          />
          <Text style={styles.title}>My Projects</Text>
          <View style={styles.boxcontainter}>
            <View style={styles.box}>
              <Text style={styles.catname}>HR</Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.catname}>Finance</Text>
            </View>
          </View>
          <View style={styles.boxcontainter}>
            <View style={styles.box}>
              <Text style={styles.catname}>PM</Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.catname}>UI/UX</Text>
            </View>
          </View>
          <View style={styles.boxcontainter}>
            <View style={styles.box}>
              <Text style={styles.catname}>Teaching</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242132"
  },
  container2: {
    margin: 40,
    flex: 1
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10
  },
  boxcontainter: {
    height: 150,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  box: {
    width: 150,
    height: 130,
    backgroundColor: "#37314c",
    borderRadius: 5,
    justifyContent: "flex-end"
  },
  catname: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 15
  }
});
