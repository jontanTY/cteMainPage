import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-web";

export default function Calendar({ children }) {
    return (
        <View style={styles.calenderContainer}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={children}
                    renderItem={({ item }) => <Text style={styles.eventsContainer}>{item.name} {item.month} {item.date}</Text>}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    calenderContainer: {
        height: 200,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
    },

    eventsContainer: {
        flex: 1,
        flexDirection: 'row',
        borderLeftWidth: 2,
    },
});