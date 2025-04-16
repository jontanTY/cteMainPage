import { Text, View, ScrollView, StyleSheet, Image } from "react-native-web";
import { Link } from "expo-router";
//import Video, { VideoRef } from "react-native-video";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import { useRef } from "react";

export default function FashionPage() {
    //const VideoPlayer = () => {
        //const videoRef = useRef<VideoRef>(null);
        return (
            <View style={styles.fullBg}>
                <PageHeader />
                <ScrollView style={styles.scrollviewStyle}>
                    <View style={styles.secondBg}>
                        <View style={styles.box}>
                            <View style={styles.horizAlign}>
                                <View style={styles.profileBox}>
                                    <Image style={styles.imageParent} source={require('../assets/icon.png')} />
                                </View>
                                <View style={styles.HeaderParent}>
                                    <Header>FASHION</Header>
                                </View>

                            </View>
                        </View>


                        <View style={styles.box2}>
                            <View style={styles.horizAlign}>
                                <View style={styles.HeaderParent2}>
                                    <Header>This class is a class about fashion!</Header>
                                </View>
                            </View>
                            <View style={styles.horizAlign}>
                                <View style={styles.HeaderParent2}>
                                    <Header>Skibidi toilet </Header>
                                </View>
                            </View>
                        </View>

                        <View style={styles.imageBox}>
                            {/* <Image style={styles.imageStyle} source={require('../assets/Fashion Bag Pic 1.jpg')} /> */}

                            {/* <Image style={styles.imageStyle2} source={require('../assets/Fashion Bag Pic 2.jpg')} /> */}
                        </View>

                        <View style={styles.imageBox}>
                        
                        </View>

                    </View>



                </ScrollView>
            </View>
        );
    }

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
        paddingTop: 150
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
        paddingLeft: 60
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
        justifyContent: 'center'
    },

    imageBox: {
        width: 1300,
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    imageStyle: {
        height: 480,
        width: 480,
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'left',
        borderWidth: 2,
    },

    imageStyle2: {
        borderWidth: 2,
        height: 480,
        width: 480,
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'right',
    },


});