import { Pressable, FlatList, Text, View, SafeAreaView, ScrollView, StyleSheet, Image, ImageBackground } from "react-native";
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
                <ScrollView style={styles.scrollviewStyle}>
                    <View style={styles.secondBg}>
                        <View style={styles.box}>
                            <Text style={styles.pathwayText}>{props.class}</Text>
                        </View>


                        <View style={styles.box2}>
                            <Text style={styles.descriptionText}>{props.info}</Text>
                        </View>

                        <View style={styles.box3}>
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
                                            <Text style={styles.descriptionText}>{item.description}</Text>
                                            </>
                                        );
                                    }
                                    }
                                    keyExtractor={(item) => item.id}
                                /> : null}

                            {showSubPathway ?
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    data={props.subClasses.slice(showSubClass -1, showSubClass)}
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
                                    data={props.finalClasses.slice(showSubClass -1, showSubClass)}
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
                    </View>
                </ScrollView>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    fullBg: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#9de9f5',
        alignItems: 'center',
    },
    secondBg: {
        flex: 1,
        alignItems: 'center',
        height: '80%',
        width: '100%',
        paddingTop: 150
    },
    pathwayText: {
        fontSize: 50,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        fontFamily: Fonts.font400,
    },
    box: {
        height: 200,
        width: '50%',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    descriptionText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        marginTop: 15,
        marginHorizontal: 20,
        fontFamily: Fonts.font300,
    },
    scrollviewStyle: {
        width: '100%'
    },
    box2: {
        height: 450,
        width: '100%',
        backgroundColor: 'white',
        marginTop: 150,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'top',
    },
    box3: {
        height: 450,
        width: '100%',
        backgroundColor: 'white',
        marginTop: 150,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'top',
    },
    classContainer: {
        flex: 1,
        flexDirection: 'row',
        color: 'white',
    },


});