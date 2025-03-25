import { useEffect, useState } from "react";
import { Text, Pressable, View, StyleSheet } from "react-native-web";
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

    function handlePress() {
        let searchInfo = {
            "URL": url,
            "query": props.input,
            "clicked": '1'
        }

        let searchString = JSON.stringify(searchInfo);
        console.log("clicked!");
    }

    return (
        <View>
            <View style={styles.container}>
                <View>
                    <Pressable style={styles.titleStyle} onPress={handlePress}>{props.titleText}</Pressable>
                    <Text style={styles.titleStyle}></Text>
                </View>
                <Text>{props.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        textDecorationLine: 'underline',
    },
    container: {
        marginLeft: 20,
        marginBottom: 20,
    }
});