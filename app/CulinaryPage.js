import { Text, View } from "react-native-web";
import { Link } from "expo-router";
import { ScrollView } from 'react-native';
import PageTemplate from "../components/PageTemplate";
import { VideoView, useVideoPlayer } from 'expo-video'

export default function CulinaryPage() {
    const player = useVideoPlayer(require('../assets/culinaryvid.mp4'), player =>  { player.play() }); // This will play the video when the component mounts. You can also call player.pause() to pause it or player.seek(0) to seek to the beginning.
    return (
        <View>
            <Text>Culinary Page</Text>
            <Link href='/'>Go back home</Link>
            <VideoView style = {{width: 300, height: 300}} player = {player}/>
        </View>
    )
}