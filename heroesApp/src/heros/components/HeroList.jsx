
import React from 'react'
import { getHerosByPublisher } from '../helpers/getHerosByPublisher'

export const HeroList = ({ publisher }) => {
    const heroes = getHerosByPublisher(publisher)
    console.log(heroes)
    return (
        
        
            <ul>
                {heroes.map((hero) => <li>
                    {hero.superhero}
                </li>)}

            </ul>
        

    )
}


