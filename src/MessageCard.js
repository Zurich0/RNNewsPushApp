import React from "react";
import {View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    wholeArea: {
        paddingBottom: 20
    },
    container: {
        borderWidth: 5,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 20
    },
    message: {
        fontSize: 24,
        fontWeight: "bold"
    }
});

const MessageCard = (props) => {
    function onPressFunction() {
        console.log("hhh");
    }

    return (
        <View
            style={styles.wholeArea}
        >
            <View
                style={styles.container}
            >
                <Text
                    style={styles.message}
                >{props.info}
                </Text>
            </View>
        </View>
    );
};

export default MessageCard;
