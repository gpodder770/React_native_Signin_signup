import { React } from "react";
import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import { Link } from "expo-router";

const LoginAccount = (props) => {
  return (
    <View style={styles.div}>
      <Text>Already Have an Account?</Text>
      <Link href="/" asChild>
        <Pressable style={styles.item}>
          <Text style={styles.text}>{props.text}</Text>
        </Pressable></Link>
    </View>
  );
};

const styles = StyleSheet.create({
  div: {
    position: "absolute",
    bottom: '5%',
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

export default LoginAccount;
