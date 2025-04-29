import { Text, View, ScrollView, StyleSheet, Image } from "react-native-web";
import { Link } from "expo-router";
import PageTemplate from "../components/PageTemplate";

export default function AutomotivePage() {
    return (
        <>
            <PageTemplate
                class='Automotive'
                info='Car stuff'
                image={require('../assets/automotiveBackground.jpg')}
            />
        </>
    )
}