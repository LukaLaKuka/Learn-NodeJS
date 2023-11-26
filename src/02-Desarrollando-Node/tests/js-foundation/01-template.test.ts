import { emailTemplate } from "../../src/js-foundation/01-template";


describe('Test in Template Email', () => {
    test('Template Email', () => {
        expect(emailTemplate).toBe(`
<div>
    <h1>Hi {{name}}</h1>
    <p>Ur order has been already proccesed.</p>
</div>
`);
    });
});