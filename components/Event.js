import { ImageBackground, StyleSheet, Text, View } from "react-native";

import Fonts from "../constants/fonts";

import {
    useFonts,
    BeVietnam_100Thin,
    BeVietnam_100Thin_Italic,
    BeVietnam_300Light,
    BeVietnam_300Light_Italic,
    BeVietnam_400Regular,
    BeVietnam_400Regular_Italic,
    BeVietnam_500Medium,
    BeVietnam_500Medium_Italic,
    BeVietnam_600SemiBold,
    BeVietnam_600SemiBold_Italic,
    BeVietnam_700Bold,
    BeVietnam_700Bold_Italic,
    BeVietnam_800ExtraBold,
    BeVietnam_800ExtraBold_Italic,
} from '@expo-google-fonts/be-vietnam-pro';

export default function Event({ name, month, date }) {
    let [fontsLoaded] = useFonts({
        BeVietnam_100Thin,
        BeVietnam_100Thin_Italic,
        BeVietnam_300Light,
        BeVietnam_300Light_Italic,
        BeVietnam_400Regular,
        BeVietnam_400Regular_Italic,
        BeVietnam_500Medium,
        BeVietnam_500Medium_Italic,
        BeVietnam_600SemiBold,
        BeVietnam_600SemiBold_Italic,
        BeVietnam_700Bold,
        BeVietnam_700Bold_Italic,
        BeVietnam_800ExtraBold,
        BeVietnam_800ExtraBold_Italic,
    });
    return (
        <View style={styles.eventContainer}>
            <Text style={styles.eventText}>{name}</Text>
            <Text style={styles.eventText}>{month} {date}</Text>
        </View>
    );
}

styles = StyleSheet.create({
    eventContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        flex: 1,
        position: 'relative',
    },

    eventText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: Fonts.font100,
    },
});