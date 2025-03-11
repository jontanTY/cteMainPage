import { Text, View, ScrollView, StyleSheet, Image } from "react-native-web";
import { Link } from "expo-router";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";

export default function themScreensTemplate() {
    return (
        <View style={styles.fullBg}>
            <PageHeader />
            <ScrollView style={styles.scrollviewStyle}>
                <View style={styles.secondBg}>
                    <View style={styles.box}>
                        <View style={styles.horizAlign}>
                            <View style={styles.profileBox}>
                                <Image style={styles.imageParent} source={require('../assets/personIcon.png')} />
                            </View>
                            <View style={styles.HeaderParent}>
                                <Header>Automotive</Header>
                            </View>

                        </View>
                    </View>


                    <View style={styles.box2}>
                        <View style={styles.horizAlign}>
                            <View style={styles.HeaderParent2}>
                                <Header>Class Info Here</Header>
                            </View>
                        </View>
                    </View>

                    <View style={styles.placeholder}>

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


});