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

        if (scrollY < 610) {
            setBackgroundImage(require('../assets/mohsPAC.jpg'));
        } else if (scrollY >= 610 && scrollY < 3000) {
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
                    <View style={styles.scrollCointainer}>
                        <View style={styles.headerContainer}>

                            <Image
                                style={styles.imageStyle}
                                source={require('../assets/moanaluaIcon.png')}
                            />
                            <Header> CTE </Header>
                        </View>
                        <Calendar style={styles.calendarContainer}> {events} </Calendar>
                        <View style={styles.infoBackground}>

                        </View>
                        <View style={styles.placeholderStyle}>
                        </View>
                        <ImageBackground
                            style={styles.infoBackground}
                            source={require('../assets/mohsPAC.jpg')}
                        >
                            <View style={styles.darkenBackground}>
                                <Text style={styles.sponsorTitle}> CTE Alumni </Text>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/user.png')}
                                />
                                <Text style={styles.sponsorText}> John Doe </Text>
                                <Text style={styles.sponsorText}> "Exploring the endless possibilities of technology, we uncover new ways to innovate, connect, and create. The journey is as important as the destination, and every step forward brings us closer to a brighter future." </Text>
                            </View>
                        </ImageBackground>
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

    scrollCointainer: {
        flex: 1,
        position: 'absolute',
        overflow: 'hidden',
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
        top: 0,
        left: 0,
        width: Dimensions.get("window").width, //for full screen
        height: Dimensions.get("window").height, //for full screen
    },

    image: {
        marginTop: 40,
        marginBottom: 20,
        backgroundSize: 'cover',
        width: 300,
        height: 300,
    },

    studentName: {
        fontSize: 20,
        color: 'white',
        marginTop: 10,
        marginBottom: 10,
    },

    placeholderStyle: {
        backgroundColor: 'transparent',
        width: Dimensions.get("window").width,
        height: 450,
        marginTop: 150,
    },

    infoBackground: {
        backgroundColor: 'white',
        width: Dimensions.get("window").width,
        height: 650,
        marginTop: 150,
        overflow: 'hidden',
    },

    darkenBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        flex: 1,
        width: Dimensions.get("window").width,
        alignItems: 'center',
    },
    sponsorTitle: {
        color: 'white',
        fontSize: 40,
        marginTop: 20,
        textAlign: 'center',
    },

    sponsorText: {
        marginBottom: 20,
        color: 'white',
        fontSize: 20,
        maxWidth: 900,
        textAlign: 'center',
    }
});
