import { FlatList, View, Text } from "react-native-web";
import { useEffect, useState } from "react";
import ResultObjectReturn from "../components/ResultObjectReturn";
import PageHeader from "../components/PageHeader";

export default function resultsPage(props) {
    const [list, setList] = useState([{ title: 'result1', score: 5, description: 'awdawd', URL: "www.1" },
    { title: 'result2', score: 10, description: 'awdawd2', URL: "www.2" },
    { title: 'result3', score: 1, description: 'loawd', URL: "awds2" }]);

    let id = 0;

    // function addResult(enterText, enterSubtext) {
    //     //makes list equal to a newList that adds a new result that has these components (title, )
    //     setList((newlist) => [{ title: enterText, description: enterSubtext, key: id.toString()}, ...newlist]);
    //     id++;
    // }

    useEffect(() => {
        // Sort the list by score in descending order
        const sortedList = [...list].sort((a, b) => b.score - a.score);
        setList(sortedList);
    }, []);

    return (
        <View>
            <PageHeader />
            <View style={{marginTop: 60}}>
                <FlatList
                    data={list}
                    renderItem={(itemData) => {
                        return (
                            <ResultObjectReturn
                                description={itemData.item.description}
                                titleText={itemData.item.title}
                                keyNum={itemData.item.key}
                                query={props.input}
                                URL={itemData.item.URL}
                            />
                        );
                    }}
                />
            </View>
        </View>
    );
}