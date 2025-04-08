import { View, Text, StyleSheet, Image } from 'react-native';

export default function TeacherDescription(props) {
    return(
        <View style = {styles.container}>
            <View style = {styles.imageView}>
                <Image
                    style = {styles.image}
                    source = {props.source}
                />
            </View>
            <View style = {styles.textView}>
                <Text style = {styles.teacherHeaderText}>{props.name}</Text>
                <Text style = {styles.descriptionText}>{props.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: 'black',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        marginVertical: 35,
        marginHorizontal: 15,
    },
    image: {
        flex: 1,
    },
    imageView: {
        height: '100%',
        width: '100%',
        flex: '15%',
    },
    teacherHeaderText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white',
    },
    descriptionText: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 25,
        paddingRight: 10,
        color: 'white',
        
    },
    textView: {
        flex: '85%',
        flexDirection: 'column',
    },
})