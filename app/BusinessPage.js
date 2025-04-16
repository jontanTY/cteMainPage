import { Text, View, ScrollView, StyleSheet, Image, ImageBackground } from "react-native";
import { Link } from "expo-router";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";

export default function themScreensTemplate() {
    return (
        <>
            <PageHeader />
            <ImageBackground style={styles.fullBg}
                source={require('../assets/businessBackground.png')}
            >
                <ScrollView style={styles.scrollviewStyle}>
                    <View style={styles.secondBg}>
                        <View style={styles.box}>
                                <View style={styles.HeaderParent}>
                                    <Text style={styles.headerText}> Business </Text>
                                </View>
                        </View>


                        <View style={styles.box2}>
                            <View style={styles.horizAlign}>
                                <View style={styles.HeaderParent2}>
                                    <Text>"Welcome to the Business Program! Our course is designed to equip students with the essential skills and knowledge needed to thrive in the dynamic world of business. From entrepreneurship and marketing to finance and management, this program provides hands-on learning experiences and real-world applications. Whether you're looking to start your own business or pursue a career in the corporate world, our curriculum will help you build a strong foundation for success. Join us and take the first step toward becoming a future business leader!"</Text>
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
        height: '100%',
        width: '100%',
        backgroundColor: '#9de9f5',
        alignItems: 'center',
        justifyContent: 'top',
    },
    headerText: {
        fontSize: 80,
        color: 'black',
        marginTop: 20,
        textAlign: 'center',
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
    },
    HeaderParent:
    {
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderParent2:
    {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 80,
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
        borderRadius: 10,
        justifyContent: 'center',
    },


});