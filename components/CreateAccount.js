import { React } from "react";
import { View, Text, Pressable, StyleSheet, Alert } from "react-native";

const CreateAccount = (props) => {
  return (
    <View style={styles.div}>
      <Text>Don't Have an Account?</Text>
      <Pressable
        style={styles.item}
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      >
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  div: {
    position: "absolute",
    bottom: 50,
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#0d6efd",
    paddingLeft: 3,
    fontSize: 16,
    fontWeight: 600,
    textTransform: "uppercase",
  },
});

export default CreateAccount;
