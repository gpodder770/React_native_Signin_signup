import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
// import { faEAngry } from 'free-regular-svg-icons';

const InputFIeld = (props) => {
  const [number, onChangeNumber] = React.useState("");
  return (
    <View style={styles.item}>
      <View>
        <Ionicons name={props.icon} size={26} color={"#4d4647"} />
      </View>
      <View style={styles.view_textinput}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder={props.placeholder}
          placeholderTextColor="#a8adaa"
          selectionColor="orange"
        />
      </View>
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
    borderBottomWidth:2,
    borderBottomColor:"#4d4647"
  },
  view_textinput: {
    paddingLeft: 20,
    width: "100%",
    // paddingRight:15
  },
  input: {
    fontSize: 16,
    color: "red",
  },
});

export default InputFIeld;
