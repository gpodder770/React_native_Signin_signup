// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import InputFIeld from "./components/InputFIeld";
import PageHeading from "./components/PageHeading";
import SubmitButton from "./components/SubmitButton";
import CreateAccount from "./components/CreateAccount";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("./assets/noooby.png")} />
        {/* <Text style={styles.project_name}>ALMS</Text> */}

        <View style={styles.item_input}>
          <PageHeading text={"SIGN IN"} />
          <Text style="styles.label" text=""></Text>
          <InputFIeld icon={"mail-outline"} placeholder={"Enter your Email"} />
          <InputFIeld
            icon={"lock-closed-outline"}
            placeholder={"Enter you Password"}
          />
          {/* <InputFIeld
            icon={"lock-closed-outline"}
            placeholder={"Enter you Password Again"}
          /> */}
          <SubmitButton title={"Login"} />
        </View>

        
          <CreateAccount text="Click Here" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  logo: {
    width: 180,
    height: 180,
    position:'absolute',
    top:150
  },
  // project_name:{
  //   fontSize: "36",
  //   fontWeight:"800"
  // },
  item_input: {
    marginTop: 150,
  },
});
