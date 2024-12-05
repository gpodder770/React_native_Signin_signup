import React from "react";
import { StyleSheet, View, Pressable, Text, Alert } from "react-native";

const SubmitButton = (props) => {
  return (
    <View>
      <Pressable style={styles.item} onPress={() => Alert.alert("Button with adjusted color pressed")}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop:15,
    paddingTop: 20,
    paddingBottom: 20,
    // paddingLeft: 50,
    // paddingRight: 50,
    backgroundColor: "#0d6efd",
    
    width: "40%",
    alignSelf: "center",
    borderRadius: 8,
    
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    textTransform: "uppercase",
    letterSpacing: 2,
    color:"white",
    fontWeight:700
  },
});

export default SubmitButton;
