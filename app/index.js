import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

import Header from '../components/Header';
import Calendar from '../components/Calendar';
import DropdownComponent from '../components/DropdownComponent';
import MainButton from '../components/MainButton';

import PageHeader from '../components/PageHeader';

const events = [
    { id: 1, name: "event1", month: 1, date: 5 },
    { id: 2, name: "event2", month: 3, date: 10 },
    { id: 3, name: "event3", month: 7, date: 2 },
    { id: 4, name: "event4", month: 11, date: 7 },
];

export default function MainPage() {
    return (

        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImageStyle}
                source={require('../assets/mohsPAC.jpg')}
            />
            <PageHeader />

            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../assets/moanaluaIcon.png')}
                    />
                    <Header> CTE </Header>
                </View>
                <Calendar style={styles.calendarContainer}> {events} </Calendar>
                <Text style={styles.scrollCheck}>  </Text>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',

    },
    
    headerContainer: {
        height: 120,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: '#eeeeee',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        alignItems: 'center',
        backgroundColor: 'white',
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
        alignSelf: 'center',
        opacity: '78%',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: Dimensions.get("window").width, //for full screen
        height: Dimensions.get("window").height //for full screen
    },

    scrollCheck: {
        margin: 1000,
    },
});
