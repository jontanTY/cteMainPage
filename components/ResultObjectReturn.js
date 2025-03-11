import { useEffect, useState } from "react";
import { Text, Pressable, View } from "react-native-web";
import * as Linking from 'expo-linking';

export default function ResultObjectReturn(props) {
    const [url, setURL] = useState("");

    const getInitialURL = async () => {
        const initialURL = await Linking.getInitialURL();
        //console.log("Initial URL: " + initialURL);
        if (initialURL) {
            setURL(initialURL);
            // Handle the URL as needed
        }
    };

    useEffect(() => {
        getInitialURL();
    }, []);

    console.log("URL: " + url);
    console.log("Des: " + props.description);
    console.log("Title: " + props.titleText);
    
    let searchInfo = {
        "URL": url,
        "query": props.input,
        "clicked": '1'
    }

    let searchString = JSON.stringify(searchInfo);

    return (
        <View>
            <Pressable>{props.title}</Pressable>
            <Text>{props.description}</Text>
            <Text>wowzerwthatsa result for sure {props.description}{props.keyNum}</Text>
        </View>
    );
}