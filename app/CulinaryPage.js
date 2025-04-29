
import { Text, View, StyleSheet, Image, ImageBackground} from "react-native";
import { Link } from "expo-router";
import { ScrollView } from 'react-native';
import PageTemplate from "../components/PageTemplate";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import { VideoView, useVideoPlayer } from 'expo-video';


export default function CulinaryPage() {
    const classes = [
        { id: 1, name: "Culinary Arts: Food Preparation", description: 1 },
        { id: 2, name: "Advanced Culinary Arts: Pastry/Savory", description: 1},
        { id: 3, name: "Kitchen Restaurant Operations", description: 3 },
        { id: 4, name: "Culinary Arts: Work-Based Learning", description: 7},
        
    ];

    const subClasses = [
        
    ];

    const finalClasses = [
        
    ];
    const player = useVideoPlayer(require('../assets/culinaryvid.mp4'), player => { player.play() }); // This will play the video when the component mounts. You can also call player.pause() to pause it or player.seek(0) to seek to the beginning.
    return (
        
                           
            
               <PageTemplate  
                class = 'Culinary & Food Service'
                info='Foundations of Culinary Arts is an introductory course designed to inform students about careers in the food prep and service industries or related fields, basic nutritional and cooking concepts, and the history and influence of culture on food. This Level 1 course serves as the foundation course for the Culinary Arts program of study. Upon completion of the course, a proficient student will demonstrate proper safety protocols in a commercial kitchen and proper use of small and large equipment and supplies. The student will also correctly convert measures and have foundational knowledge of nutrition and cooking techniques and the role of culture in food creation. This course provides practical work experiences in the classroom, laboratory, and may require performances outside the class period and school day.'
                image={require('../assets/culinary-background.jpg')}
                foundationClass='Foundations of Culinary Arts'
                foundationDescription=""
                classes={classes}
                subClasses={subClasses}
                finalClasses={finalClasses}
                club={'FCCLA'}
                clubDescription="Family, Career and Community Leaders of America (FCCLA) is a national Career and Technical Student Organization (CTSO) for students in Family and Consumer Sciences (FCS) education in public and private schools. FCCLA offers intra-curricular resources and opportunities for students to pursue careers that support families. Since 1945, FCCLA members have been making a difference in their families, careers, and communities by addressing important personal, work, and societal issues through Family and Consumer Sciences education."
                decaImage={require('../assets/fccla.jpg')}
               />
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