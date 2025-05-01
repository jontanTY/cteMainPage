import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions, Image } from 'react-native';
import { Link } from "expo-router";

import PageHeader from '../components/PageHeader';
import TeacherDescription from '../components/TeacherDescription';

export default function TeachersPage() {
    return (
        <View style = {styles.container}>
            <ImageBackground
                style={styles.backgroundImageStyle}
                source={require('../assets/mohsPAC.jpg')}
            />
            <PageHeader/>
            <ScrollView style = {styles.scrollContainer}>
                <TeacherDescription
                    source={require('../assets/teacher-headshots/Andersson-Photo.jpg')}
                    name = 'Mr. Andersson'
                    description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netu'
                />
                <TeacherDescription
                    source={require('../assets/teacher-headshots/Hashizume-Photo.jpg')}
                    name = 'Mr. Hashizume'
                    description = 'description text'
                />
                <TeacherDescription
                    source={require('../assets/teacher-headshots/Ms.-Hashizume-Photo.jpg')}
                    name = 'Ms. Hashizume'
                    description = 'description text'
                />
                <TeacherDescription
                    source={require('../assets/teacher-headshots/Ikenaga-Photo.jpg')}
                    name = 'Mr. Ikenaga'
                    description = 'description text'
                />
                <TeacherDescription
                    source={require('../assets/teacher-headshots/Ishikawa-Photo.jpg')}
                    name = 'Mr. Ishikawa'
                    description = 'description text'
                />
                <TeacherDescription
                    source={require('../assets/teacher-headshots/Komar-Photo.jpg')}
                    name = 'Mr. Komar'
                    description = 'description text'
                />
                <TeacherDescription
                    source={require('../assets/teacher-headshots/Kramer-Photo.jpg')}
                    name = 'Mrs. Kramer'
                    description = 'description text'
                />
                <TeacherDescription
                    source={require('../assets/teacher-headshots/Makekau-Photo.jpg')}
                    name = 'Mr. Makekau'
                    description = 'description text'
                />
                <TeacherDescription
                    source={require('../assets/teacher-headshots/Mitsuda-Photo.jpg')}
                    name = 'Mr. Mitsuda'
                    description = 'description text'
                />
                <TeacherDescription
                    source={require('../assets/teacher-headshots/Murray-Photo.jpg')}
                    name = 'Mr. Murray'
                    description = 'description text'
                />
                <TeacherDescription
                    source={require('../assets/teacher-headshots/Nishimura-Photo.jpg')}
                    name = 'Mr. Nishimura'
                    description = 'description text'
                />
                <TeacherDescription
                    source={require('../assets/teacher-headshots/Perkins-Photo.jpg')}
                    name = 'Ms. Perkins'
                    description = 'description text'
                />
                <TeacherDescription
                    source={require('../assets/teacher-headshots/Takahashi-Photo.jpg')}
                    name = 'Mr. Takahashi'
                    description = 'description text'
                />
                <TeacherDescription
                    source={require('../assets/teacher-headshots/Zavala-Photo.jpg')}
                    name = 'Mr. Zavala'
                    description = 'description text'
                />
                <Text style={styles.addScroll}>  </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
     backgroundImageStyle: {
            alignSelf: 'center',
            opacity: '78%',
            position: "absolute",
            
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
    },
    addScroll: {
        margin: 1000,
    },
    scrollContainer: {
        flex: 1,
    },
    
})