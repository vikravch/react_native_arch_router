import Ingredient from "./Ingredient";
import BaseCocktail from "./BaseCocktail";

export default class Cocktail extends BaseCocktail{
    #category;
    #alc;
    #ingredients; // Array!

    constructor(serverObj) {
        super(
            serverObj.drinks[0].idDrink,
            serverObj.drinks[0].strDrink,
            serverObj.drinks[0].strDrinkThumb
        )
        this.#category = serverObj.drinks[0].strCategory;
        this.#alc = serverObj.drinks[0].strAlcoholic;

        this.#ingredients = [];
        for (let i = 1; i<=15; i++){
            const cocktailData = serverObj.drinks[0];
            if(cocktailData['strIngredient'+i]!=null){
                this.#ingredients.push(new Ingredient(
                    cocktailData['strIngredient'+i],
                    cocktailData['strMeasure'+i]
                ))
            }
        }
    }
    get category(){
        return this.#category;
    }
    get alc(){
        return this.#alc;
    }
    get image(){
        return this.thumb;
    }
    get ingredients(){
        return this.#ingredients;
    }
    get obj(){
        return {
            id: this.id,
            name: this.name,
            category: this.#category,
            alc: this.#alc,
            thumb: this.thumb,
        }
    }
}
