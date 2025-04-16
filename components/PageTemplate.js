import { Text, View, ScrollView, StyleSheet, Image, ImageBackground } from "react-native";
import { Link } from "expo-router";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import { Dimensions } from "react-native";

export default function PageTemplate(props) {
    return (
        <>
            <PageHeader />

            <ImageBackground style={styles.fullBg}
                source={props.image}
            >                <ScrollView style={styles.scrollviewStyle}>
                    <View style={styles.secondBg}>
                        <View style={styles.box}>
                            <View style={styles.horizAlign}>
                                <View style={styles.profileBox}>

                                    <Image style={styles.imageParent} source={props.image} />
                                </View>
                                <View style={styles.HeaderParent}>
                                    <Header>{props.class}</Header>
                                </View>

                            </View>
                        </View>


                        <View style={styles.box2}>
                            <View style={styles.horizAlign}>
                                <View style={styles.HeaderParent2}>
                                    <Header style={styles.HeaderParent2}>{props.info}</Header>
                                </View>
                            </View>
                        </View>

                        <View style={styles.placeholder}>

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
        borderRadius: 10,
    },
    profileBox:
    {
        paddingLeft: 25,
        paddingTop: 20
    },
    imageParent: {
        height: 150,
        width: 150,
        borderRadius: 20,
    },
    horizAlign: {
        flexDirection: 'row',
        textAlign: 'center',
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
        textAlign: 'center',
        flex: 1,

    },

    scrollviewStyle: {
        flexGrow: 1,
        width: '100%'
    },
    box2: {
        height: 450,
        width: '75%',
        backgroundColor: 'white',
        marginTop: 150,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'top',
        borderRadius: 10,
    },


});