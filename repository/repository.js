// Domain - repository, rules of getting and data management
import {Api, FakeApi} from "../data/api";
import * as LocalStore from "../data/local_store";
import Cocktail from "./Cocktail";
import Category from "./Category";
import BaseCocktail from "./BaseCocktail";
/*
interface Repository{
    async getRandomCocktail();
    saveToHistory(cocktail);
    getHistoryList();
    async getCategories();
}
*/


export default class DataRepository{
    async getRandomCocktail(){
        // fetch ...
        const responseData = await Api.getRandom();
        console.log(responseData);
        return new Cocktail(responseData);
    }
    saveToHistory(cocktail){
        LocalStore.saveCocktailToStore(cocktail);
    }
    getHistoryList(){
        return LocalStore.getHistoryFromStore();
    }
    async getCategories(){
        const responseData = await Api.getCategories();
        return responseData.drinks.map((item)=>{
            return new Category(item);
        });
    }
    async getCocktailsByCategory(category){
        const response = await Api.getCocktailsByCategory(category);
        return response.drinks.map(
            (item)=> BaseCocktail.fromJSON(item)
        );
    }
}

class FakeRepository{
    async getRandomCocktail(){
        const responseData = await FakeApi.getRandom(); // server object
        return new Cocktail(responseData);
    }
    saveToHistory(cocktail){
        console.log('Try to save');
    }
    getHistoryList(){
        return [{
            id: 123,
            name: 'Test',
            category: 'Test category',
            alc: false
        }];
    }
    async getCategories(){
        const responseData = await FakeApi.getCategories();
        return responseData.drinks.map((item)=>{
            return new Category(item);
        });
    }
    async getCocktailsByCategory(category){
        const response = await FakeApi.getCocktailsByCategory(category);
        return response.drinks.map(
            (item)=> BaseCocktail.fromJSON(item)
        );
    }
}
