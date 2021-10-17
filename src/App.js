import React from "react";
// import { SafeAreaView, Text } from "react-native";
import LottieView from 'lottie-react-native';
import { SafeAreaView } from "react-native";

export default () => {
    return (
        <SafeAreaView>
            <LottieView source={require('./assets/animations/reactLogo.json')} autoPlay={true} style={{ width: 500 }}></LottieView>
        </SafeAreaView>

    )
}