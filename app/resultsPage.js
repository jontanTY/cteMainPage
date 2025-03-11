import { FlatList, View, Text } from "react-native-web";
import { useEffect, useState } from "react";
import ResultObjectReturn from "../components/ResultObjectReturn";

export default function resultsPage(props) {
    const [list, setList] = useState([{title: 'result1', score: 5, description: 'awdawd', URL: "www.1"},
        {title: 'result1', score: 5, description: 'awdawd2', URL: "www.2"}]);

    let id = 0;

    // function addResult(enterText, enterSubtext) {
    //     //makes list equal to a newList that adds a new result that has these components (title, )
    //     setList((newlist) => [{ title: enterText, description: enterSubtext, key: id.toString()}, ...newlist]);
    //     id++;
    // }

    // const getInitialURL = async () => {
    //         const url = await Linking.getInitialURL();
    //         if (url) {
    //             console.log('Initial URL:', url);
    //             // Handle the URL as needed
    //         }
    //         return url;
    //     };

    const sortScoreList = (list) =>{
        let newList = list;
        newList.sort((a, b) => {
            return a.score - b.score;
        });
        setList(newlist);
    }
    sortScoreList();

    return (
        <View>
            <Text>lol</Text>
            <FlatList
                data={list}
                renderItem={(itemData) => {
                    return (
                        <ResultObjectReturn
                            description={itemData.item.description}
                            titleText={itemData.item.title}
                            keyNum={itemData.item.key}
                            query = {props.input}
                            URL = {itemData.item.URL}
                        />
                    );
                }}
            />
        </View>
    );
}