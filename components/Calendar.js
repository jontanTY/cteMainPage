import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-web";
import Event from "./Event";

const events = [
    { id: 1, name: "event1", month: 'January', date: 5},
    { id: 2, name: "event2", month: 'March', date: 10},
    { id: 3, name: "event3", month: 'July', date: 2},
    { id: 4, name: "event4", month: 'November', date: 7},

];

export default function Calendar() {
    return (
        <View style={styles.calenderContainer}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    horizontal={true}
                    data={events}
                    renderItem={({ item }) =>
                        <View>
                            <Event
                                name={item.name}
                                month={item.month}
                                date={item.date}
                            />
                        </View>
                    }
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
        fontSize: 16,
    },
});