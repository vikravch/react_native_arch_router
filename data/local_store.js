const HISTORY_ITEM = 'history';

export function saveCocktailToStore(cocktail){
    /*const dataStr = localStorage.getItem(HISTORY_ITEM);
    const oldArr = (dataStr)?JSON.parse(dataStr):[];*/
    const oldArr = getHistoryFromStore();
    oldArr.push(cocktail);
    localStorage.setItem(HISTORY_ITEM,
        JSON.stringify(oldArr));
}

// returns array
export function getHistoryFromStore(){
    const dataStr = localStorage.getItem(HISTORY_ITEM);
    if(dataStr){
        return JSON.parse(dataStr);
    } else {
        return [];
    }
}

// Model - View - Intent
