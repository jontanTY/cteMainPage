import { Text, View, ScrollView, StyleSheet } from "react-native-web";
import { Link } from "expo-router";
import PageHeader from "../components/PageHeader";

export default function themScreensTemplate() {
    return (
        <View style={styles.fullBg}>
            <PageHeader /> 
            <ScrollView style={styles.secondBg}>
                    <View style={styles.box}>

                    </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    fullBg: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#9de9f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondBg: {
        flex: 1,
        backgroundColor: 'blue',
        height: '100%',
        width: '100%',
    },
    box: {
        height: '100%',
        width: '50%',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 5
    }

});