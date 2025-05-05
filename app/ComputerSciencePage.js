import { Text, View, StyleSheet, ScrollView, Image } from "react-native-web";
import { Link } from "expo-router";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import PageTemplate from "../components/PageTemplate";

export default function ComputerSciencePage() {
    return (
            <>
                <PageTemplate
                    class='Computer Science'
                    info='This course is a hands-on introduction to computer science concepts and skills. Computer science concepts covered will include an exploration of computer programming in different applications such as web development, game development and robotics. Students will have opportunities to learn and apply problem-solving skills. This course is a recommended pre-cursor to the AP Computer Science A course. Recommended for students who are considering a major in computer science or who will want to be informed citizens in today’s technological society.'
                    image={require('../assets/automotiveBackground.jpg')}
                />
            </>
    )
}