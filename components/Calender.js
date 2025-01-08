import { StyleSheet, Text, View } from "react-native";

export default function Calendar({ event1, event2, event3, event4 }) {
    <View style={styles.calenderContainer}>
        <Text style={styles.eventsContainer}> {event1} </Text>
        <Text style={styles.eventsContainer}> {event2}  </Text>
        <Text style={styles.eventsContainer}> {event3}  </Text>
        <Text> {event4} </Text>

    </View>
}

const styles = StyleSheet.create({
    calenderContainer: {
        height: 200,
    },

    eventsContainer: {
        flex: 1,
        flexDirection: 'row',
        borderLeftWidth: 2,
    },
});