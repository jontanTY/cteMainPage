import { ScrollView, Text, View, StyleSheet, Image } from "react-native-web";
import { Link } from "expo-router";
import { VideoView, useVideoPlayer } from "expo-video";
import PageHeader from "../components/PageHeader";
import PageTemplate from "../components/PageTemplate";

export default function EngineeringPage() {
    //const player = useVideoPlayer(require('../assets/EngineeringImg/What is Engineering.mp4'), player => { player.play() });
    return (
        <>
            <PageTemplate
                class = 'Engineering'
                info = 'Here at Moanalua we offer a various amount of courses that better prepare our students for engineering related careers.'
                image = {require('../assets/engineering.jpg')}
            />
        </>
    )
}

const styles = StyleSheet.create({
    videoTopStyle: {
        alignContent: 'center', alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row', marginTop: 50
    },
    infoStyle: {
        marginTop: 10, marginLeft: 10
    },
    imageInfoStyle: {
        width: 100, height: 100, marginLeft: 20
    },
    headerStyle: {
        backgroundColor: 'navy', alignItems: 'center', justifyContent: 'center', width: '100%', padding: 30, borderLeftWidth: 200, borderLeftColor: "teal",
        borderRightWidth: 200, borderRightColor: "teal", borderTopWidth: 10, borderTopColor: "black", borderBottomWidth: 10, borderBottomColor: "black",
    },
});