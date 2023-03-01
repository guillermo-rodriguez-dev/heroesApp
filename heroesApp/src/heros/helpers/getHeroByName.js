import { heroes } from "../data/heroes-with-desc"



export const getHeroesByName = (name = '') => {
    console.log(name)
    if (name.length === 0) return [];
    const result =  heroes.filter(hero => hero.superhero.toLowerCase().includes(name.toLowerCase().trim()));

    console.log(result);
    return result;

}