import { Linking } from "expo-router";
import { Text, Pressable, View } from "react-native-web";

export default function ResultObjectReturn(props) {

    const getInitialURL = async () => {
        const url = await Linking.getInitialURL();
        if (url) {
            console.log('Initial URL:', url);
            // Handle the URL as needed
        }
        return url;
    };
    console.log("Des: " + props.description);
    console.log("Title: " + props.titleText);
    
    let searchInfo = {
        "URL": getInitialURL(),
        "query": props.input,
        "clicked": '1'
    }

    let searchString = JSON.stringify(searchInfo);

    return (
        <View>
            <Pressable></Pressable>
            <Text>{props.description}</Text>
            <Text>wowzerwthatsa result for sure {props.description}{props.titleText}{props.keyNum}</Text>
        </View>
    );
}