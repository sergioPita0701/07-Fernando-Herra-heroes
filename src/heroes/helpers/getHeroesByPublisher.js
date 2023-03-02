import { heroes } from "../data";

export const getHeroesByPublisher = (publisher) => {
    const validePublisher = ['DC Comics', 'Marvel Comics']
    if (!validePublisher.includes(publisher)) {
        throw new Error(`${publisher} no existe error`)
    }
    return heroes.filter(heroe => heroe.publisher === publisher)
}