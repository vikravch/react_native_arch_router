import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import Repository from './repository/repository';
import {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import MyStack from "./presentation/navigation/navigation_stack";

/*export default function App() {
  const [cocktail, setCocktail] = useState(undefined);
  const dataRepository = new Repository();
  const getRandom = async ()=>{
    try{
      const res = await dataRepository.getRandomCocktail();
      setCocktail(res);
    } catch (e) {
    }
  }

  return (

      <MyStack>
          {/!*<View style={styles.container}>
              <Text>Welcome</Text>
              <StatusBar style="auto" />
              <Button title={'Get random'} onPress={getRandom}/>
              <Button title={'Send log'} onPress={()=>{console.log('Log')}}/>
              <Text>{
                  cocktail?JSON.stringify(cocktail.obj):'No data'
              }</Text>
          </View>*!/}
  );
}*/
export default function App(){
    return <MyStack/>
}

{/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/}
