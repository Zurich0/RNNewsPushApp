import React from "react";
import { View, Text } from "react-native";

const FeedsPage = ( channelName ) => {
    return (
        <View
            style={{
                flexDirection: "column",
                height: 100,
            }}
        >
            <View style={{ backgroundColor: "blue", flex: 0.3 }} />
            <View style={{ backgroundColor: "red", flex: 0.9 }} />
            <Text>Hello World!</Text>
        </View>
    );
};

export default FeedsPage;
