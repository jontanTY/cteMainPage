import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';


import Header from '../components/Header';
import Calendar from '../components/Calendar';

import MainButton from '../components/MainButton';
import DropdownComponent from '../components/DropdownComponent';
import PageHeader from '../components/PageHeader';

export default function AboutUsPage() {
    return (
        <View style={styles.container}>
            <PageHeader/>
            <View style={styles.bottomContainer}>
                <Text style = {styles.textStyle}>
                    SAMPLE SAMPLE SAMPLE
                    SAMPLE SAMPLE SAMPLE
                </Text>
                <Image
                    style={styles.backgroundImageStyle}
                    source={require('../assets/mohsPAC.jpg')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImageStyle: {
        alignSelf: 'center',
        opacity: '78%',
        position: "absolute",
        
        top: 200,
        left: 200,
        right: 0,
        bottom: 0,
        width: 500, 
        height: 700,
        marginHorizontal: 500,
    },

    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },

    bottomContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },

    textStyle: {
        marginVertical: 250,
    }

});