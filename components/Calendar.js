import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-web";

const events = [
    { id: 1, name: "Fat people Appreciation day", month: 'January', date: 5 },
    { id: 2, name: "event2", month: 'March', date: 10 },
    { id: 3, name: "event3", month: 'July', date: 2 },
    { id: 4, name: "event4", month: 'November', date: 7 },
];

export default function Calendar() {
    return (
        <View style={styles.calenderContainer}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    horizontal={true}
                    data={events}
                    renderItem={({ item }) => <Text style={styles.eventsContainer}>{item.name} {item.month} {item.date} </Text>}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    calenderContainer: {
        height: 200,
        marginTop: 75,
        backgroundColor: 'black',
        opacity: '50%',
        marginRight: 200,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
    },

    eventsContainer: {
        flex: 1,
        flexDirection: 'row',
        color: 'white',
    },
});