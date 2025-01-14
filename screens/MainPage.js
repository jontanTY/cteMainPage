import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


import Header from '../components/Header';
import Calendar from '../components/Calender';

const events = [
    { id: 1, name: "Business", month: 1, date: 5 },
    { id: 2, name: "Engineering", month: 3, date: 10 },
    { id: 3, name: "REtard", month: 7, date: 2 },
    { id: 4, name: "forgot", month: 11, date: 7 },
];

export default function MainPage() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/moanaluaIcon.png')}
                />
                <Header> CTE </Header>
            </View>
            <ScrollView style={styles.container}>
                <Image
                    style={styles.backgroundImageStyle}
                    source={require('../assets/mohsPAC.jpg')}
                />

                <View>
                    <Calendar> {events} </Calendar>
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

    headerContainer: {
        height: 120,
        flexDirection: 'row',
        borderColor: '#eeeeee',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        alignItems: 'center',

    },

    iconTextContainer: {
        flexDirection: 'column',
        alignItems: 'center',
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
});
