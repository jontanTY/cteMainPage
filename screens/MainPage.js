import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


import Header from '../components/Header';
import Calendar from '../components/Calendar';
import DropdownComponent from '../components/DropdownComponent';

const events = [
    { id: 1, name: "event1", month: 1, date: 5 },
    { id: 2, name: "event2", month: 3, date: 10 },
    { id: 3, name: "event3", month: 7, date: 2 },
    { id: 4, name: "event4", month: 11, date: 7 },
];

export default function MainPage() {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <DropdownComponent />
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../assets/moanaluaIcon.png')}
                    />
                    <Header> CTE </Header>
                </View>
                <Image
                    style={styles.backgroundImageStyle}
                    source={require('../assets/mohsPAC.jpg')}
                />

                <View>
                    <Calendar style={styles.calendarContainer}> {events} </Calendar>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    searchContainer: {
        flex: 0.17,
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#eeeeee',
    },

    headerContainer: {
        height: 120,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: '#eeeeee',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        alignItems: 'center',
    },

    dropDownContainer: {
        flexDirection: 'row-reverse'
    },

    iconTextTop: {
        fontSize: 20,
        flexDirection: 'column',
        alignSelf: 'center',
        borderColor: '#eeeeee',
        borderBottomWidth: 2,
        width: 150,
    },

    iconTextBottom: {
        fontSize: 20,
        flexDirection: 'column',
        alignSelf: 'center',
    },

    imageStyle: {
        height: 90,
        width: 90,
        flexDirection: 'column',
        marginLeft: 10,
    },

    headerStyle: {
        color: 'white',
    },

    backgroundImageStyle: {
        height: 550,
        width: '100%',
        alignSelf: 'center',
        opacity: '78%',
    },

    calendarContainer: {
        height: 160,
    }
});
