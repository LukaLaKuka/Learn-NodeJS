import { heros } from "../../src/js-foundation/02-destructuring";

describe('Test in Destructuring File', () => {

    const [firstHero, secondHero, thirdHero] = heros;

    test('Destructuring', () => {
        expect(thirdHero).toBe('Batman');
        expect(secondHero).toBe('Superman');
        expect(firstHero).toBe('Flash');
        expect(heros).toContain('Flash');
        expect(heros).toContain('Batman');
        expect(heros).toContain('Superman');
    });
});