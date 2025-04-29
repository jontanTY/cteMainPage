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
            info = 'Graphics Text Here'   
            image={require('../assets/img_6779.png')}         
            />
        </ScrollView>
    )
}