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
            <PageHeader title={'About Us'}/>
            <ScrollView style={styles.bottomContainer}>
                <Text style = {styles.textStyle}>
                    Welcome to the Moanalua High School CTE Department website! 
                    This website as a project for the advanced computer science students in 
                    order to demonstrate the different pathways, people, and details of the CTE department. 
                    The courses offered in CTE are a place where students can learn about different career pathways and gain valuable skills that will help them in their future careers.
                    The CTE department offers a variety of courses in different fields, including culinary arts, business, and technology, healthcare, and many more.
                </Text>

                <Text style = {styles.textStyle}>
                    The CTE department is dedicated to providing students with hands-on learning experiences that will prepare them for the workforce. 
                    Education should be relevant and engaging, and we strive to create a positive learning environment for all students.
                    Students are encouraged to take advantage of the multitude of opportunities available in the CTE department, and we look forward to helping them achieve their goals.
                    Whether it be internships, club competitions, job-shadowing, volunteering, and much more, the CTE department is here to help students succeed.
                </Text>

                <View>
                <Image
                    style={styles.backgroundImageStyle}
                    source={require('../assets/better-teachers.jpg')}
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
        width: 650, 
        height: 300,
        marginHorizontal: 450,
        marginTop: -910,
    },

    headerContainer: {
        textAlign: 'left',
        justifyContent: 'top',
        flex: 0.2
    },


    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'top',
        backgroundColor: '#c9ada7',
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