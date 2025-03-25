import { ScrollView, Text, View, StyleSheet, Image } from "react-native-web";
import { Link } from "expo-router";
import { VideoView, useVideoPlayer } from "expo-video"

export default function EngineeringPage() {
    const player = useVideoPlayer(require('../assets/What is Engineering.mp4'), player => { player.play() });
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Text>CTE Engineering Pathway</Text>
                <Link href='/'>Go back home</Link>
                <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row' }}>
                    <Image style={{ width: 300, height: 300, marginRight: 100 }} source={require('../assets/favicon.png')} />
                    <VideoView style={{ width: 500, height: 500, }} player={player} nativeControls />
                    <Image style={{ width: 300, height: 300, marginLeft: 100 }} source={require('../assets/favicon.png')} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                <View >
                    <View style={{ marginTop: 50, alignItems: 'left', }}>
                        <Text style={{ alignItems: 'center', fontSize: 20 }}>Foundations</Text>
                    </View>
                    <View style={{ marginTop: 10}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ alignItems: 'left', marginTop: 10, marginLeft: 10 }}>Bridge Project</Text>
                            <Image style={{ width: 100, height: 100, marginLeft: 50, justifyContent: 'center' }} source={require('../assets/favicon.png')} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ alignItems: 'left', marginTop: 10, marginLeft: 10 }}>Catapult Project</Text>
                            <Image style={{ width: 100, height: 100, marginLeft: 40, justifyContent: 'center' }} source={require('../assets/favicon.png')} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ alignItems: 'left', marginTop: 10, marginLeft: 10 }}>Snap Circuit Project</Text>
                            <Image style={{ width: 100, height: 100, marginLeft: 20, justifyContent: 'center' }} source={require('../assets/favicon.png')} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ alignItems: 'left', marginTop: 10, marginLeft: 10 }}>Plane/Rocket Project</Text>
                            <Image style={{ width: 100, height: 100, marginLeft: 20, justifyContent: 'center' }} source={require('../assets/favicon.png')} />
                        </View>
                    </View>
                </View>

                <View>
                    <View style={{ marginTop: 50, alignItems: 'left', }}>
                        <Text style={{ alignItems: 'center', fontSize: 20 }}>Foundations</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ alignItems: 'left', marginTop: 10, marginLeft: 10 }}>Bridge Project</Text>
                        <Text style={{ alignItems: 'left', marginTop: 10, marginLeft: 10 }}>Catapult Project</Text>
                        <Text style={{ alignItems: 'left', marginTop: 10, marginLeft: 10 }}>Snap Circuit Project</Text>
                        <Text style={{ alignItems: 'left', marginTop: 10, marginLeft: 10 }}>Plane/Rocket Project</Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});