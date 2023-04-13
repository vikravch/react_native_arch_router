// Data - Server connection / local store connection / file connection / DB connection
export class Api{
    static async getRandom(){
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        console.log(response);
        return response.json();
    }
    static async getCategories(){
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        console.log(response);
        return response.json();
    }
    static async getCocktailsByCategory(category){
        const response = await fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + category);
        console.log(response);
        return response.json();
    }
}

export class FakeApi{
    static async getRandom(){
        return new Promise((resolve)=>{
            resolve(JSON.parse("{\"drinks\":[{\"idDrink\":\"13032\",\"strDrink\":\"Spiced Peach Punch\",\"strDrinkAlternate\":null,\"strTags\":null,\"strVideo\":null,\"strCategory\":\"Punch \\/ Party Drink\",\"strIBA\":null,\"strAlcoholic\":\"Non alcoholic\",\"strGlass\":\"Collins Glass\",\"strInstructions\":\"Combine peach nectar, orange juice and brown sugar in a large saucepan. Tie cinnamon and cloves in a small cheesecloth bag. Drop into saucepan. Heat slowly, stirring constantly, until sugar dissolves. Simmer 10 minutes. Stir in lime juice. Serve in hot mugs.\",\"strInstructionsES\":null,\"strInstructionsDE\":\"Pfirsichnektar, Orangensaft und braunen Zucker in einem gro\u00dfen Topf vermengen, Zimt und Nelken in einem kleinen Seihtuchbeutel binden. In den Topf eintauchen, langsam unter st\u00e4ndigem R\u00fchren erhitzen, bis sich der Zucker aufl\u00f6st. 10 Minuten k\u00f6cheln lassen. Limettensaft unterr\u00fchren. In hei\u00dfen Tassen servieren.\",\"strInstructionsFR\":null,\"strInstructionsIT\":\"Unisci il nettare di pesca, il succo d'arancia e lo zucchero di canna in una grande casseruola.\\r\\nLega cannella e chiodi di garofano in un piccolo sacchetto di garza.\\r\\nMettili nella casseruola.\\r\\nRiscaldare lentamente, mescolando continuamente, fino a quando lo zucchero si dissolve.\\r\\nFai bollire 10 minuti.\\r\\nAggiungi il succo di lime.\\r\\nServire in tazze calde.\",\"strInstructionsZH-HANS\":null,\"strInstructionsZH-HANT\":null,\"strDrinkThumb\":\"https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/qxvypq1468924331.jpg\",\"strIngredient1\":\"Peach nectar\",\"strIngredient2\":\"Orange juice\",\"strIngredient3\":\"Brown sugar\",\"strIngredient4\":\"Cinnamon\",\"strIngredient5\":\"Cloves\",\"strIngredient6\":\"Lime juice\",\"strIngredient7\":null,\"strIngredient8\":null,\"strIngredient9\":null,\"strIngredient10\":null,\"strIngredient11\":null,\"strIngredient12\":null,\"strIngredient13\":null,\"strIngredient14\":null,\"strIngredient15\":null,\"strMeasure1\":\"46 oz \",\"strMeasure2\":\"20 oz \",\"strMeasure3\":\"1\\/2 cup \",\"strMeasure4\":\"3 3-inch \",\"strMeasure5\":\"1\\/2 tsp \",\"strMeasure6\":\"2 tblsp \",\"strMeasure7\":null,\"strMeasure8\":null,\"strMeasure9\":null,\"strMeasure10\":null,\"strMeasure11\":null,\"strMeasure12\":null,\"strMeasure13\":null,\"strMeasure14\":null,\"strMeasure15\":null,\"strImageSource\":null,\"strImageAttribution\":null,\"strCreativeCommonsConfirmed\":\"No\",\"dateModified\":\"2016-07-19 11:32:11\"}]}"));
        });
    }
    static async getCategories(){
        return new Promise((resolve)=>
            resolve(JSON.parse('{"drinks":[{"strCategory":"Ordinary Drink"},{"strCategory":"Cocktail"},{"strCategory":"Shake"},{"strCategory":"Other \\/ Unknown"},{"strCategory":"Cocoa"},{"strCategory":"Shot"},{"strCategory":"Coffee \\/ Tea"},{"strCategory":"Homemade Liqueur"},{"strCategory":"Punch \\/ Party Drink"},{"strCategory":"Beer"},{"strCategory":"Soft Drink"}]}'))
        )
    }
    static async getCocktailsByCategory(category){
        return new Promise((resolve)=> {
            resolve(JSON.parse('{"drinks":[{"strDrink":"3-Mile Long Island Iced Tea","strDrinkThumb":"https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/rrtssw1472668972.jpg","idDrink":"15300"},{"strDrink":"410 Gone","strDrinkThumb":"https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/xtuyqv1472669026.jpg","idDrink":"13581"},{"strDrink":"50\\/50","strDrinkThumb":"https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/wwpyvr1461919316.jpg","idDrink":"14598"}]}'));
        });
    }
}

/*
interface ApiContract{
    static async getRandom();
    static async getCategories();
    static async getCocktailsByCategory(category);
}
*/
