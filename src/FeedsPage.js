import React from "react";
import {View, StyleSheet, Image, Text, ScrollView, SafeAreaView} from "react-native";
import img1 from '../assets/toBack.png';
import MessageCard from "./MessageCard";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topArea: {
        flexDirection: "row",
        backgroundColor: "white",
        height: 60
    },
    backLogo: {
        width: 30,
        height: 30,
        marginLeft: 6
    },
    feedsArea: {
        backgroundColor: "orange",
        flex: 1,
    },
    scrollView: {
        marginHorizontal: 10,
    },
    text: {
        fontSize: 42,
    },
    channelName: {
        fontSize: 24,
        fontWeight: "bold"
    }
});

const FeedsPage = ( props ) => {
    return (
        <View
            style={styles.container}>
            <View style={styles.topArea}>
                <View style={{
                    justifyContent: 'center',
                }}>
                    <Image
                        style={styles.backLogo}
                        source={ img1 }
                    />
                </View>
                <View style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={styles.channelName}>
                        {props.channelName}
                    </Text>
                </View>
            </View>
            <SafeAreaView style={styles.feedsArea}>
                <ScrollView style={styles.scrollView}>
                    <MessageCard
                        info="Klein">
                    </MessageCard>
                    <MessageCard
                        info="Channel">
                    </MessageCard>
                    <MessageCard
                        info="Zhong">
                    </MessageCard>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default FeedsPage;
