import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


import Header from '../components/Header';
import Calendar from '../components/Calender';
export default function MainPage() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>

                <View>
                    <Text style={styles.iconTextTop}>Moanalua HS</Text>
                    <Text style={styles.iconTextBottom}>CTE</Text>
                </View>
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
                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    headerContainer: {
        height: 140,
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
