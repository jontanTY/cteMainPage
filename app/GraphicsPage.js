import { Text, View, StyleSheet, Image, ImageBackground} from "react-native";
import { Link } from "expo-router";
import { ScrollView } from 'react-native';
import PageTemplate from "../components/PageTemplate";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import { VideoView, useVideoPlayer } from 'expo-video';

export default function GraphicsPage() {
    return (
        <ScrollView>
            <PageTemplate
            class = 'Graphics'
            info = 'Foundations of Creative Media is an introductory course designed to inform students about careers in creative media, including digital design and digital film production. This Level 1 course serves as the foundation course for Digital Design program of study. Upon completion of the course, a proficient student will be able to explain what comprises the creative media industry sector, explain principles of digital design and its influences, demonstrate basic knowledge of digital camera and video equipment, and create a digital photo collection using design and equipment knowledge. A student will also be able to describe various occupations and outline the steps necessary to advance in specific careers. As part of a student’s program of study progression, the student will create a digital program of study portfolio, providing evidence of mastery of course standards and readiness to advance and complete the program of study.'            
            />
        </ScrollView>
    )
}