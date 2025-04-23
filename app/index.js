import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

import {
    useFonts,
    BeVietnam_100Thin,
    BeVietnam_100Thin_Italic,
    BeVietnam_300Light,
    BeVietnam_300Light_Italic,
    BeVietnam_400Regular,
    BeVietnam_400Regular_Italic,
    BeVietnam_500Medium,
    BeVietnam_500Medium_Italic,
    BeVietnam_600SemiBold,
    BeVietnam_600SemiBold_Italic,
    BeVietnam_700Bold,
    BeVietnam_700Bold_Italic,
    BeVietnam_800ExtraBold,
    BeVietnam_800ExtraBold_Italic,
} from '@expo-google-fonts/be-vietnam';

import Header from '../components/Header';
import Calendar from '../components/Calendar';


import PageHeader from '../components/PageHeader';
import Fonts from '../constants/fonts';

const events = [
    { id: 1, name: "event1", month: 1, date: 5 },
    { id: 2, name: "event2", month: 3, date: 10 },
    { id: 3, name: "event3", month: 7, date: 2 },
    { id: 4, name: "event4", month: 11, date: 7 },
];

const image1 = require('../assets/collage-5.png');
const image2 = require('../assets/MeneMart-DECA.png');

export default function MainPage() {
    const [backgroundImage, setBackgroundImage] = useState(require('../assets/collage-5.png'));
    const player = useVideoPlayer(require('../assets/intro.mp4'), player => { player.play() });
    let [fontsLoaded] = useFonts({
        BeVietnam_100Thin,
        BeVietnam_100Thin_Italic,
        BeVietnam_300Light,
        BeVietnam_300Light_Italic,
        BeVietnam_400Regular,
        BeVietnam_400Regular_Italic,
        BeVietnam_500Medium,
        BeVietnam_500Medium_Italic,
        BeVietnam_600SemiBold,
        BeVietnam_600SemiBold_Italic,
        BeVietnam_700Bold,
        BeVietnam_700Bold_Italic,
        BeVietnam_800ExtraBold,
        BeVietnam_800ExtraBold_Italic,
    });

    const handleScroll = (event) => {
        const scrollY = event.nativeEvent.contentOffset.y;

        if (scrollY < 610) {
            setBackgroundImage(image1);
        } else if (scrollY >= 610 && scrollY < 3000) {
            setBackgroundImage(image2);
        } else {
            setBackgroundImage(image1);
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
                       
                        <Calendar> {events} </Calendar>
                        <View style={styles.infoBackground}>
                            <Text style={styles.videoText}> CTE Introduction </Text>
                            <VideoView style={styles.video} player={player} />
                        </View>
                        <View style={styles.placeholderStyle} />
                        <ImageBackground
                            style={styles.infoBackground}
                            source={require('../assets/studentSpotBackground.jpg')}
                        >
                            <View style={styles.darkenBackground}>
                                <Text style={styles.sponsorTitle}> CTE Alumni </Text>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/student.jpg')}
                                />
                                <Text style={styles.sponsorText}> Rawli Kole Ringor </Text>
                                <Text style={styles.sponsorText}> "Exploring the endless possibilities of technology, we uncover new ways to innovate, connect, and create. The journey is as important as the destination, and every step forward brings us closer to a brighter future." </Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.socialContainer}>
                            <Text style={styles.socialText}> Contact Us </Text>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },

    image: {
        marginTop: 40,
        marginBottom: 20,
        backgroundSize: 'cover',
        width: 300,
        height: 300,
        borderRadius: 1000 / 2,
    },

    videoText: {
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 15,
        marginTop: 25,
        fontFamily: Fonts.font500,
    },

    video: {
        margin: 15,
        width: 831.25,
        height: 475,
        alignSelf: 'center',
        borderRadius: 20,
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
        height: 600,
        overflow: 'hidden',
    },

    infoBackground: {
        backgroundColor: 'white',
        width: Dimensions.get("window").width,
        height: 650,
        marginTop: 150,
        overflow: 'hidden',
        top: 0,
        left: 0,
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
        fontFamily: Fonts.font300,
    },

    sponsorText: {
        marginBottom: 20,
        color: 'white',
        fontSize: 20,
        maxWidth: 900,
        textAlign: 'center',
        fontFamily: Fonts.font100,
    },

    socialContainer: {
        backgroundColor: 'white',
        height: 500,
        width: Dimensions.get("window").width,
    },

    socialText: {
        fontSize: 30,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: Fonts.font300,
    }
});
