import React from "react";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { faEAngry } from 'free-regular-svg-icons';

const PasswordInputFIeld = (props) => {
  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.item}>
      <View>
        <Ionicons name={props.icon} size={26} color={"#4d4647"} />
      </View>
      <View style={styles.view_textinput}>
        <TextInput
          style={styles.input}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          placeholder={props.placeholder}
          placeholderTextColor="#a8adaa"
          selectionColor="orange"
        />
      </View>
      <MaterialCommunityIcons
        name={showPassword ? "eye-off" : "eye"}
        size={24}
        color="#aaa"
        style={styles.icon}
        onPress={toggleShowPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 15,
    paddingRight: 15,
    width: "100%",
    alignItems: "center",
    // backgroundColor: "#4d4647",
    // borderRadius: 8,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#4d4647",
  },
  view_textinput: {
    paddingLeft: 20,
    width: "85%",
    // paddingRight:15
  },
  input: {
    fontSize: 16,
    color: "red",
  },
});

export default PasswordInputFIeld;
