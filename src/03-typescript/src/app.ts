import { findHeroById } from "./services";
import { Hero } from "./interfaces";

const myHero: Hero | undefined = findHeroById(1);

console.log(myHero);