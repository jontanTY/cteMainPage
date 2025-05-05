import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { Link } from "expo-router";
import { ScrollView } from 'react-native';
import PageTemplate from "../components/PageTemplate";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import { VideoView, useVideoPlayer } from 'expo-video';

const classes = [
    { id: 1, name: 'Foundations of Creative Media (9,10,11,12) (1 year)', description: 1 },
    { id: 2, name: 'Digital Design 1 (10,11,12) (1 year)', description: 3 },
    { id: 3, name: 'Digital Design 2 (10,11,12) (1 year)', description: 7 },
    { id: 4, name: 'Digital Design: Work Based Learning (11,12) (1 year)', description: 9 },
];

const subClasses = [
//there are no sub classes for graphics or final classes!

]

const finalClasses = [

]


export default function GraphicsPage() {
    return (
       
            <PageTemplate
                class='Graphics'
                info='Foundations of Fashion & Artisan Design is an introductory course designed to inform students about careers in fashion and craftwork design. This Level 1 course serves as the foundation course for the Fashion & Artisan Design program of study. Upon completion of the course, a proficient student should be able to explain the impact of fashion and craftwork on art, explain and utilize design elements, and create simple fashion or craftwork design artifacts. A student will also be able to describe various occupations and outline the steps necessary to advance in specific careers. As part of a student’s program of study progression, the student will create a digital program of study portfolio, providing evidence of mastery of course standards and readiness to advance and complete the program of study.'
                image={require('../assets/Graphics background.png')}
                foundationClass='Design Art Media'
                descriptionText="This course introduces students to business operations, marketing strategies, financial literacy, and entrepreneurship. Through hands-on projects and real-world applications, students develop critical thinking and problem-solving skills for future studies or careers."
                classes={classes}
                subClasses={subClasses}
                finalClasses={finalClasses}
                clubDescription = 'Currently there are no clubs for Graphics. However, students are encouraged to join the graphics team and participate in helping the create merchandise for the school to purchase!' 
            />
    
    )
}