import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import Calendar from '../components/Calendar';
import PageHeader from '../components/PageHeader';

const events = [
    { id: 1, name: "event1", month: 1, date: 5 },
    { id: 2, name: "event2", month: 3, date: 10 },
    { id: 3, name: "event3", month: 7, date: 2 },
    { id: 4, name: "event4", month: 11, date: 7 },
];

export default function MainPage() {
    const [backgroundImage, setBackgroundImage] = useState(require('../assets/mohsPAC.jpg'));

    const handleScroll = (event) => {
        const scrollY = event.nativeEvent.contentOffset.y;

        // Example logic to change background image based on scroll position
        if (scrollY < 400) {
            setBackgroundImage(require('../assets/mohsPAC.jpg'));
        } else if (scrollY >= 400 && scrollY < 800) {
            setBackgroundImage(require('../assets/MeneMart-DECA.png'));
        } else {
            setBackgroundImage(require('../assets/mohsPAC.jpg'));
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImageStyle}
                source={backgroundImage}
            >

                <PageHeader />

                <ScrollView style={styles.container} onScroll={handleScroll} scrollEventThrottle={16}>
                    <View style={styles.headerContainer}>

                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/moanaluaIcon.png')}
                        />
                        <Header> CTE </Header>
                    </View>
                    <Calendar style={styles.calendarContainer}> {events} </Calendar>
                    <View style={styles.placeholderStyle}>
                    </View>
                </ScrollView>
            </ImageBackground>

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
        width: Dimensions.get("window").width, //for full screen
        height: Dimensions.get("window").height, //for full screen
    },

    backgroundImageStyle1: {
        alignSelf: 'center',
        opacity: '78%',
        position: 'absolute',
        top: 500,
        width: Dimensions.get("window").width, //for full screen
        height: Dimensions.get("window").height, //for full screen
    },


    placeholderStyle: {
        backgroundColor: 'transparent',
        width: Dimensions.get("window").width,
        height: 450,
        marginTop: 150,
    },
});
