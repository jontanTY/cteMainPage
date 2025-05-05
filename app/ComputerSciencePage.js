import { Text, View, StyleSheet, ScrollView, Image } from "react-native-web";
import { Link } from "expo-router";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";
import PageTemplate from "../components/PageTemplate";

export default function ComputerSciencePage() {
    const classes = [
        { id: 1, name: "AP Computer Science A", description: 1 },
        { id: 2, name: "Programming 2: Mobile Apps Development", description: 1},
    ];

    const subClasses = [
        
    ];

    const finalClasses = [
        
    ];

    return (
        <>
            <PageTemplate 
                class = 'Computer Science'
                info = 'Computer Science is a field of study that focuses on the theory, development, and application of computer systems and software. It encompasses a wide range of topics, including programming, algorithms, data structures, artificial intelligence, and more. Computer science plays a crucial role in shaping the technology that drives our modern world.'
                foundationClass = 'Foundations of Computer Systems and Technology'
                foundationDescription="This course is hands-on introduction to computer science concepts and skills. Computer science concepts covered will include an exploration
                of computer programming in different applications such as web development, game development and robotics. Students will have
                opportunities to learn and apply problem-solving skills. This course is a recommended pre-cursor to the AP Computer Science A course.
                Recommended for students who are considering a major in computer science or who will want to be informed citizens in today’s technological
                society."
                image={require('../assets/CompSciImg/compSciBackground.jpg')}
                classes={classes}
                subClasses={subClasses}
                finalClasses={finalClasses}
                club={'Development Team (Coding Club)'}
                clubDescription="The Development Team (Coding Club) is a student-led organization that focuses on enhancing coding skills, collaborating on projects, and participating in coding competitions. Members work together to learn new programming languages, develop software applications, and share knowledge about the latest trends in technology."
                decaImage={require('../assets/fccla.jpg')}
            />
            
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
        height: 135,
        width: 135,
    },
    horizAlign: {
        flexDirection: 'row',
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
    normalText2: {
        fontSize: 48,
        marginTop: 6,
        marginLeft: 16
    },
    abnormalText: {
        fontSize: 32,
        marginTop: 16,
        marginLeft: 24
    },
    imageParent2: {
        marginTop: 12,
        marginRight: 10
    }
});