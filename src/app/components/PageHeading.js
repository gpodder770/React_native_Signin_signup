import React from "react";
import { View,Text,StyleSheet } from "react-native";

const PageHeading = (props)=>{
    return (
    <Text style={styles.heading}>{props.text}</Text>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize:28,
        fontWeight: 600,
        textAlign:'center',
        marginBottom:20
    },
});



export default PageHeading;