import { heroes } from "../data/heroes-with-desc"




export const getHerosByPublisher = (publisher) => {
    const validatorsPublishers = ["DC Comics", "Marvel Comics"];

    if( !validatorsPublishers.includes(publisher) ){
        throw new Error(`${publisher} is not a valid publisher`)
    }
    return heroes.filter(heros => heros.publisher == publisher )
};