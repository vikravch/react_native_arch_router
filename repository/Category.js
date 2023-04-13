export default class Category{
    #categoryName;

    constructor(serverObj) {
        this.#categoryName = serverObj.strCategory;
    }

    get categoryName(){
        return this.#categoryName;
    }

    toString(){
        return this.#categoryName;
    }

}
// {"strCategory":"Ordinary Drink"}