import { Animated, Pressable, FlatList, Text, View, SafeAreaView, ScrollView, StyleSheet, Image, ImageBackground } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { Dimensions } from "react-native";
import Fonts from "../constants/fonts";

import {
    useFonts,
    BeVietnam_100Thin,
    BeVietnam_100Thin_Italic,
    BeVietnam_300Light,
    BeVietnam_300Light_Italic,
    BeVietnam_400Regular,
    BeVietnam_400Regular_Italic,
    BeVietnam_500Medium,
    BeVietnam_500Medium_Italic,
    BeVietnam_600SemiBold,
    BeVietnam_600SemiBold_Italic,
    BeVietnam_700Bold,
    BeVietnam_700Bold_Italic,
    BeVietnam_800ExtraBold,
    BeVietnam_800ExtraBold_Italic,
} from '@expo-google-fonts/be-vietnam-pro';


export default function PageTemplate(props) {
    const [showPathway, setShowPathway] = useState(false);
    const [showSubPathway, setShowSubPathway] = useState(false);
    const [showFinalPathway, setShowFinalPathway] = useState(false);
    const [showSubClass, setShowSubClass] = useState(0);
    const [clubPath, setClubPath] = useState(1);

    function changeShowPathway() {
        setShowPathway(!showPathway);
        setShowSubPathway(false);
        setShowFinalPathway(false);
    };

    function changeShowSubPathway(classId) {
        setShowSubPathway(!showSubPathway);
        setShowSubClass(classId);
        setShowFinalPathway(false);
    }

    function changeShowFinalPathway() {
        setShowFinalPathway(!showFinalPathway);
    }

    function changeShowClubPath(path) {
        setClubPath(path);
    }

    let [fontsLoaded] = useFonts({
        BeVietnam_100Thin,
        BeVietnam_100Thin_Italic,
        BeVietnam_300Light,
        BeVietnam_300Light_Italic,
        BeVietnam_400Regular,
        BeVietnam_400Regular_Italic,
        BeVietnam_500Medium,
        BeVietnam_500Medium_Italic,
        BeVietnam_600SemiBold,
        BeVietnam_600SemiBold_Italic,
        BeVietnam_700Bold,
        BeVietnam_700Bold_Italic,
        BeVietnam_800ExtraBold,
        BeVietnam_800ExtraBold_Italic,
    });

    return (
        <>
            <PageHeader />
            <ImageBackground style={styles.fullBg}
                source={props.image}
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.35)' }}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        style={styles.scrollviewStyle}>
                        <View style={styles.secondBg}>
                            <View style={styles.box}>
                                <Text style={styles.pathwayText}>{props.class}</Text>
                                <Text style={styles.subPathwayText}>–Sky Im is soo fat–</Text>
                            </View>


                            <View style={styles.courseBox}>
                                <Text style={styles.descriptionText}>{props.info}</Text>
                            </View>

                            <View style={styles.catalogueBox}>
                                <SafeAreaView style={styles.classContainer}>
                                    <Pressable onPress={() => { changeShowPathway() }}>
                                        <Text style={styles.descriptionText}>{props.foundationClass}</Text>
                                    </Pressable>
                                    {showPathway ?
                                        <FlatList
                                            showsHorizontalScrollIndicator={false}
                                            data={props.classes}
                                            renderItem={({ item }) => {
                                                return (
                                                    <>
                                                        <Pressable
                                                            style={styles.descriptionText}
                                                            onPress={() => { changeShowSubPathway(item.id) }}
                                                        >{item.name}</Pressable>
                                                    </>
                                                );
                                            }
                                            }
                                            keyExtractor={(item) => item.id}
                                        /> : null}

                                    {showSubPathway ?
                                        <FlatList
                                            showsHorizontalScrollIndicator={false}
                                            data={props.subClasses.slice(showSubClass - 1, showSubClass)}
                                            renderItem={({ item }) => {
                                                return (
                                                    <Pressable
                                                        style={styles.descriptionText}
                                                        onPress={() => { changeShowFinalPathway() }}
                                                    >{item.name}</Pressable>

                                                );
                                            }
                                            }
                                            keyExtractor={(item) => item.id}
                                        /> : null}
                                    {showFinalPathway ?
                                        <FlatList
                                            showsHorizontalScrollIndicator={false}
                                            data={props.finalClasses.slice(showSubClass - 1, showSubClass)}
                                            renderItem={({ item }) => {
                                                return (
                                                    <Text style={styles.descriptionText}>{item.name}</Text>

                                                );
                                            }
                                            }
                                            keyExtractor={(item) => item.id}
                                        /> : null}
                                </SafeAreaView>
                            </View>
                            <View style={styles.clubBox}>
                                <Text style={styles.clubHeader}>{props.club}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.buttonContainer}>
                                        <Pressable
                                            style={styles.clubText}
                                            onPress={() => { changeShowClubPath(1) }}>
                                            Description
                                        </Pressable>
                                        <Pressable
                                            style={styles.clubText}
                                            onPress={() => { changeShowClubPath(2) }}>
                                            Activities
                                        </Pressable>
                                        <Pressable
                                            style={styles.clubText}
                                            onPress={() => { changeShowClubPath(3) }}>
                                            Awards
                                        </Pressable>
                                    </View>
                                    {clubPath === 1 ?
                                        <View style={styles.expandContainer}>
                                            <Image source={props.decaImage} style={{ width: 300, height: 300, marginTop: 10 }} />
                                            <Text style={styles.descriptionText}>{props.clubDescription}</Text>
                                        </View> : null}
                                    {clubPath === 2 ?
                                        <View style={styles.expandContainer}>
                                        </View> : null}
                                    {clubPath === 3 ?
                                        <View style={styles.expandContainer}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                data={props.awards}
                                                renderItem={({ item }) => {
                                                    return (
                                                        <View style={styles.expandContainer}>
                                                            <Text style={styles.descriptionText}>{item.name}</Text>
                                                            <Image source={item.image} style={{ width: 300, height: 300, marginTop: 10 }} />
                                                        </View>
                                                    );
                                                }
                                                }
                                                keyExtractor={(item) => item.id}
                                            />
                                        </View> : null}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    fullBg: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    secondBg: {
        paddingTop: 50,
        flex: 1,
        alignItems: 'center',
        height: '80%',
        width: '100%',
    },
    pathwayText: {
        fontSize: 50,
        color: 'white',
        textAlign: 'center',
        fontFamily: Fonts.font400,
    },
    subPathwayText: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        fontFamily: Fonts.font400,
    },
    box: {
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: 175,
        width: '40%',
        borderRadius: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: 'white',
    },
    clubHeader: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
        marginTop: 15,
        marginHorizontal: 20,
        fontFamily: Fonts.font300,
    },
    descriptionText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        marginTop: 15,
        marginHorizontal: 20,
        fontFamily: Fonts.font300,
    },
    clubText: {
        fontSize: 18,
        color: 'black',
        marginTop: 15,
        marginHorizontal: 20,
        fontFamily: Fonts.font300,
        textAlign: 'left',
        width: "20%",
    },
    scrollviewStyle: {
        width: '100%'
    },
    courseBox: {
        height: 420,
        width: '100%',
        backgroundColor: 'white',
        marginTop: 150,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'top',
        borderRadius: 3,

    },
    catalogueBox: {
        height: 420,
        width: '100%',
        backgroundColor: 'white',
        marginTop: 170,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'top',
    },
    clubBox: {
        height: 420,
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
        marginTop: 170,
        justifyContent: 'top',
        overflow: 'hidden',

    },
    classContainer: {
        flex: 1,
        flexDirection: 'row',
        color: 'white',
    },
    buttonContainer: {
        flex: 0.2,
        width: '30%',
    },
    expandContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 10,
    },

});