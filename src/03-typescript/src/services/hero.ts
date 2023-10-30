import { heroes } from '../data/heroes'
import { Hero } from '../interfaces';

const findHeroById = (id: number): Hero | undefined => {
    return heroes.find((hero) => hero.id === id);
}

export {
    findHeroById,
}