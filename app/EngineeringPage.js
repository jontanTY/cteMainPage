import { ScrollView, Text, View, StyleSheet, Image } from "react-native-web";
import { Link } from "expo-router";
import { VideoView, useVideoPlayer } from "expo-video";
import PageHeader from "../components/PageHeader";

export default function EngineeringPage() {
    //const player = useVideoPlayer(require('../assets/EngineeringImg/What is Engineering.mp4'), player => { player.play() });
    return (
        <>
            <PageHeader/>
            <ScrollView style={{ flex: 1, backgroundColor: 'orange', }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <View style={styles.headerStyle}>
                        <Text style={{ fontSize: 50, marginTop: 0, color: 'white' }}>CTE Engineering Pathway</Text>
                    </View>
                    <View style={styles.videoTopStyle}>
                        <Image style={{ width: 300, height: 300, marginRight: 100 }} source={require('../assets/EngineeringImg/wrenchparent.png')} />
                        <View style={{ borderRadius: 10, borderWidth: 5, background: 'gold', borderColor: 'darkslategrey ', }}>
                            {/* <VideoView style={{ width: 500, height: 250, borderRadius: 5, }} player={player} /> */}
                        </View>
                        <Image style={{ width: 300, height: 300, marginLeft: 100 }} source={require('../assets/EngineeringImg/gearsparent.png')} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 100, background: 'gold', padding: 20, borderRadius: 50 }}>
                    <View >
                        <View style={{ alignItems: 'left', }}>
                            <Text style={{ alignItems: 'left', fontSize: 20 }}>Foundations (Year 1)</Text>
                        </View>
                        <View style={{ marginTop: 10, alignItems: 'left', }}>
                            <Text style={{ alignItems: 'center', fontSize: 15 }}>-  Intoduction to the Engineer Design Process</Text>
                        </View>
                        <View style={{ marginTop: 10, marginLeft: 50 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={styles.infoStyle} >Bridge Project</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                                <View style={{ marginLeft: 50 }}>
                                    <Text style={styles.infoStyle} >Catapult Project</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={styles.infoStyle} >Snap Circuit Project</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                                <View style={{ marginLeft: 50 }}>
                                    <Text style={styles.infoStyle} >Plane/Rocket Project</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginLeft: 50 }}>
                        <View>
                            <Text style={{ fontSize: 20 }}>Tech 1 (Year 2)</Text>
                        </View>
                        <View style={{ marginTop: 10, alignItems: 'left', }}>
                            <Text style={{ alignItems: 'left', fontSize: 15 }}>-  Basic Modeling and Design</Text>
                        </View>
                        <View style={{ marginTop: 10, marginLeft: 50 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={styles.infoStyle}>Toy Project</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>

                                <View style={{ marginLeft: 50 }}>
                                    <Text style={styles.infoStyle}>3D Modeling Project</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>

                                <View style={{ marginLeft: 50 }}>
                                    <Text style={styles.infoStyle}>Real-Life Problem Solving</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginLeft: 50 }}>
                                    <Text style={styles.infoStyle}>Puzzle Cube Project</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                                <View style={{ marginLeft: 50 }}>
                                    <Text style={styles.infoStyle}>House Project</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 150, background: 'gold', padding: 20, borderRadius: 50  }}>
                    <View style={{ marginLeft: 0 }}>
                        <View>
                            <Text style={{ fontSize: 20 }}>Tech 2 (Year 3)</Text>
                        </View>
                        <View style={{ marginTop: 10, alignItems: 'left', }}>
                            <Text style={{ alignItems: 'center', fontSize: 15 }}>-  Math and Real World Problem Solving</Text>
                            <Text style={{ alignItems: 'center', fontSize: 15, marginLeft: 15, marginTop: 5, }}>-      Physics, Kinematics, Free Body Diagrams (FBD), Mechanical Advancement</Text>
                        </View>
                        <View style={{ marginTop: 10, marginLeft: 50 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={styles.infoStyle}>Community Problem Solving</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                                <View style={{ marginLeft: 50 }}>
                                    <Text style={styles.infoStyle}>Ethics</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={styles.infoStyle}>Reverse Engineering</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                                <View style={{ marginLeft: 100 }}>
                                    <Text style={styles.infoStyle}>Material Properties</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text style={{ fontSize: 20 }}>Tech 3 (Year 4)</Text>
                        </View>
                        <View style={{ marginTop: 10, alignItems: 'left', }}>
                            <Text style={{ alignItems: 'center', fontSize: 15 }}>-  College Prep and Applications                                                                   </Text>
                        </View>
                        <View style={{ marginTop: 35 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={styles.infoStyle}>College</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                                <View style={{ marginLeft: 50 }}>
                                    <Text style={styles.infoStyle}>Local Design Challenge</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={styles.infoStyle}>Communication</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                                <View style={{ marginLeft: 50 }}>
                                    <Text style={styles.infoStyle}>Quality Management</Text>
                                    <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 100, flexDirection: 'row', justifyContent: 'space-evenly', background: 'gold', padding: 20, borderRadius: 50 }}>
                    <View style={{marginLeft: 100}}>
                        <Text style={{ fontSize: 40 }} >Focus: </Text>
                        <Text style={{ fontSize: 20, marginLeft: 70 }} >3D Modeling </Text>
                        <Text style={{ fontSize: 20, marginLeft: 70 }} >3D Printing </Text>
                    </View> 
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginLeft: 70 }} >6 Lulz Bot 3D Printers </Text>
                            <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginLeft: 70 }} >5 Bambu X1Carbon    </Text>
                            <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginLeft: 70 }} >1 Flashforge Creator  </Text>
                            <Image style={styles.imageInfoStyle} source={require('../assets/favicon.png')} />
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                    
                    </View>
                </View>


            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    videoTopStyle: {
        alignContent: 'center', alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row', marginTop: 50
    },
    infoStyle: {
        marginTop: 10, marginLeft: 10
    },
    imageInfoStyle: {
        width: 100, height: 100, marginLeft: 20
    },
    headerStyle: {
        backgroundColor: 'navy', alignItems: 'center', justifyContent: 'center', width: '100%', padding: 30, borderLeftWidth: 200, borderLeftColor: "teal",
        borderRightWidth: 200, borderRightColor: "teal", borderTopWidth: 10, borderTopColor: "black", borderBottomWidth: 10, borderBottomColor: "black",
    },
});