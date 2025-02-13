import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';


import Header from '../components/Header';
import Calendar from '../components/Calendar';

import MainButton from '../components/MainButton';
import DropdownComponent from '../components/DropdownComponent';
import PageHeader from '../components/PageHeader';

export default function AboutUsPage() {
    return (
        <View>
            <View>
            <Image
                style={styles.backgroundImageStyle}
                source={require('../assets/mohsPAC.jpg')}
            />
            
            </View>
            <PageHeader style={styles.container}/>
            <Text style={styles.textContainer}>
                SAMPLE SAMPLE SAMPLE
                SAMPLE SAMPLE SAMPLE
                
            </Text>
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
    },

    container: {
        backgroundColor: 'gray',
    },

    imageContainer: {
        
    },

    textContainer: {
        flexDirection:'row',
    },
});