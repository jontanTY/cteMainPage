
import { Text, View, StyleSheet, Image, ImageBackground} from "react-native";
import { Link } from "expo-router";
import { ScrollView } from 'react-native';
import PageTemplate from "../components/PageTemplate";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import { VideoView, useVideoPlayer } from 'expo-video';

export default function CulinaryPage() {
    const player = useVideoPlayer(require('../assets/culinaryvid.mp4'), player => { player.play() }); // This will play the video when the component mounts. You can also call player.pause() to pause it or player.seek(0) to seek to the beginning.
    return (
        <>                    
        <PageHeader />
            <View style={styles.fullBg}>
                <ImageBackground source={require('../assets/mohsPAC.jpg')} style={{ width: '100%', height: '100%' }} resizeMode="cover">
                    <ScrollView style={styles.scrollviewStyle}>
                        <View style={styles.secondBg}>
                            <View style={styles.box}>
                                <View style={styles.horizAlign}>
                                    <View style={styles.profileBox}>
                                        <Image style={styles.imageParent} source={require('../assets/chef-icon.jpg')} />
                                    </View>
                                    <View style={styles.HeaderParent}>
                                        <Header>Culinary</Header>
                                    </View>

                                </View>
                            </View>

                            <VideoView style={{ width: 400, height: 250 }} player={player} />

                            <View style={styles.box2}>
                                <Header>Mr. Mitsuda, Mrs. Perkins</Header>

                                <View style={styles.horizAlign}>
                                    <Image style={styles.imageParent} source={require('../assets/teacher-headshots/Mitsuda-Photo.jpg')} />

                                    <View style={styles.HeaderParent2}>
                                        <Image style={styles.imageParent} source={require('../assets/teacher-headshots/Perkins-Photo.jpg')} />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.placeholder}>

                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    fullBg: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#9de9f5',
        alignItems: 'center',
        justifyContent: 'top',
    },

    secondBg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
        width: '100%',
        paddingTop: 150,
        backgroundColor: (0, 0, 0, 0.9),
    },
    box: {
        height: 200,
        width: '50%',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 5,
    },
    profileBox:
    {
        paddingLeft: 25,
        paddingTop: 20
    },
    imageParent: {
        height: 150,
        width: 150,
    },
    horizAlign: {
        flexDirection: 'row'
    },
    HeaderParent:
    {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 90
    },
    HeaderParent2:
    {
        alignItems: 'center',
        justifyContent: 'center',
    },

    scrollviewStyle: {
        flexGrow: 1,
        width: '100%'
    },
    box2: {
        height: 450,
        width: '75%',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 3,
        marginTop: 150,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'top'
    },
    normalText: {
        fontSize: 48,
        marginTop: 56
    },
    abnormalText: {
        fontSize: 32,
        marginTop: 16,
        marginLeft: 24
    },
    imageParent2: {
        marginTop: 12,
        marginLeft: 256
    }
});