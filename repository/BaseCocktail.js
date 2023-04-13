export default class BaseCocktail{
    #id;
    #name;
    #thumb;
    constructor(id, name, thumb) {
        this.#id = id;
        this.#name = name;
        this.#thumb = thumb;
    }
    get id(){
        return this.#id;
    }

    get name(){
        return this.#name;
    }
    get thumb(){
        return this.#thumb+'/preview';
    }
    static fromJSON(json){
        return new BaseCocktail(
            json.idDrink,
            json.strDrink,
            json.strDrinkThumb
        )
    }
}