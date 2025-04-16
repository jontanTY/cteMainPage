import { Text, View, ScrollView, StyleSheet, Image } from "react-native-web";
import { Link } from "expo-router";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";

export default function AutomotivePage() {
    return (
        <View style={styles.fullBg}>
            <PageHeader />
            <ScrollView style={styles.scrollviewStyle}>
                <View style={styles.secondBg}>
                    <View style={styles.box}>
                        <View style={styles.horizAlign}>
                            <View style={styles.profileBox}>
                                {/* <Image style={styles.imageParent} source={require('../assets/carIcon.png')} /> */}
                            </View>
                            <View style={styles.HeaderParent}>
                                <Header>Automotive</Header>
                            </View>

                        </View>
                    </View>


                    <View style={styles.box2}>
                        <View style={styles.horizAlign}>
                                <Text style={styles.normalText}>Teacher: Mr. Andersson</Text> <Image style={styles.imageParent2} source={require('../assets/teacher-headshots/Andersson-Photo.jpg')} />
                        </View>
                            <Text style={styles.abnormalText}>The Automotive Class teaches students about the maintenance and general upkeep of motor vehicles. Students will learn how to take care of cars to be better prepared for the everyday wear-and-tear of their vehicles.</Text>
                            <Text>Courses:      Foundations of Auto Maintenance and Light Repair (9,10,11,12) (1 year),</Text>
                            <Text>Auto Maintenance and Light Repair 1 (10,11,12) (1 year),</Text>
                            <Text>Auto Maintenance and Light Repair 2 (11,12) (1 year)</Text>
                    </View>

                    <View style={styles.placeholder}>

                    </View>
                </View>
            </ScrollView>
        </View>


    )
}