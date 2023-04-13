class Ingredient {
    #name;
    #measure;
    constructor(name, measure) {
        this.#name = name;
        this.#measure = measure;
    }
    get name(){
        return this.#name;
    }
    get measure(){
        return this.#measure;
    }

}

export default Ingredient;