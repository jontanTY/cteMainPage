import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Event({ name, month, date }) {
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
    },
});