import React, {useEffect, useState} from 'react';
import {View, Text} from "react-native";
import Repository from "../../repository/repository";

const RandomCocktailScreen = () => {
    const [cocktail, setCocktail] = useState(undefined);
    const dataRepository = new Repository();
    const getRandom = async () => {
        try {
            const res = await dataRepository.getRandomCocktail();
            setCocktail(res);
        } catch (e) {
        }
    }

    useEffect(()=>{
        getRandom()
    },[])

    return (
        <View>
            <Text>{
                cocktail?JSON.stringify(cocktail.obj):'No data'
            }</Text>
        </View>
    );
};

export default RandomCocktailScreen;