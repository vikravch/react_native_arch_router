import React, {useState} from 'react';
import {
    Button,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback
} from "react-native";
import Repository from '../../repository/repository';
import RandomCocktailScreen from "./RandomCocktailScreen";

const HomeScreen = ({navigation}) => {
    const [page, setPage] = useState('random');


    let mainPage;

    switch(page){
        case 'random': mainPage = <RandomCocktailScreen/>
            break;
        case 'categories': mainPage = <Text>Categories screen</Text>
            break;
        default:
            mainPage = <Text>Wrong</Text>
    }

    return (
        <View style={styles.container}>
            <View style={styles.main_container}>
                {mainPage}
            </View>
            <View style={styles.bottom_menu}>
                <TouchableOpacity style={[styles.menu_item, {
                    //backgroundColor:"blue"
                }]} onPress={() => {
                    console.log("Random!")
                    setPage('random');
                }}
                >
                    <Text>Random</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.menu_item, {
                    //backgroundColor:"orange"
                }]} onPress={() => {
                    console.log("Categories!")
                    setPage('categories');
                }}
                >
                    <Text>Categories</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.menu_item, {
                    //backgroundColor: "red"
                }]} onPress={() => {
                    console.log("Profile!")
                    navigation.navigate('Profile', {name: 'Jane'})
                }}>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    /*
    <Text>Welcome</Text>
                <Button title={'Get random'} onPress={getRandom}/>
                <Button title={'Send log'} onPress={()=>{console.log('Log')}}/>
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        navigation.navigate('Profile', {name: 'Jane'})
                    }
                />
     */

    /*return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Profile', {name: 'Jane'})
                }
            />
        </View>
    );*/
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    main_container: {
        flex: 9,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    },
    bottom_menu: {
        flex: 1,
        backgroundColor: "yellow",
        flexDirection: "row"
    },
    menu_item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default HomeScreen;