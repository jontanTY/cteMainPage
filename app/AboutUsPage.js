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
            
            <View style = {styles.headerContainer}>
                <PageHeader title={'About Us'} />
            </View>
            <ScrollView style={styles.bottomContainer}>
                <Text style = {styles.textStyle}>
                    SAMPLE SAMPLE SAMPLE
                    SAMPLE SAMPLE SAMPLE
                    Lorem ipsum dolor sit amet, consectetur a labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>

                <Text style = {styles.textStyle}>
                    SAMPLE SAMPLE SAMPLE
                    SAMPLE SAMPLE SAMPLE
                    Lorem ipsum dolor sit amet, consectetur a labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>

                <Text style = {styles.textStyle}>
                    SAMPLE SAMPLE SAMPLE
                    SAMPLE SAMPLE SAMPLE
                    Lorem ipsum dolor sit amet, consectetur a labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <View>
                <Image
                    style={styles.backgroundImageStyle}
                    source={require('../assets/sample-image.jpg')}
                />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImageStyle: {
        alignSelf: 'center',
        opacity: '78%',
        position: "absolute",
        
        top: 700,
        left: 280,
        right: 0,
        bottom: 0,
        width: 500, 
        height: 500,
        marginHorizontal: 500,
        marginTop: -910,
    },

    headerContainer: {
        textAlign: 'left',
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
        marginVertical: 15,
        textAlign: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginHorizontal: 20,
        width: 700,
    }

});